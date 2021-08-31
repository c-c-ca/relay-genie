const { Router } = require('express');
const router = Router();

const passport = require('passport');
const { model } = require('mongoose');
const User = model('users');
const Ticket = model('tickets');
const {
  verifyToken,
  uniqueUsername,
  validateUsername,
} = require('../../middlewares');
const {
  sendEmailVerificationMessage,
  sendPasswordResetMessage,
} = require('../../services/sendgrid');
const { findUserByEmail } = require('../../models/utils');
const { ticketStrategies, ticketActionTypes } = require('../../models/Ticket');
const { CREATE_ACCOUNT, CONNECT_ACCOUNT, RESET_PASSWORD } = ticketActionTypes;
const { generateToken } = require('../../utils');
// const { copyAndSaveUser } = require('./utils');

router.get('/current-user', (req, res) => {
  res.send(req.user);
});

router.post('/register', async (req, res) => {
  await sendEmailVerificationMessage(req.headers.host, req.body.email);
  res.send();
});

router.post(
  '/create-user',
  verifyToken([CREATE_ACCOUNT]),
  validateUsername,
  uniqueUsername,
  async (req, res) => {
    const { password, email, strategy, profileId, photo, ...names } = req.body;

    await Ticket.deleteMany({ email });

    req.login(
      await User.register(
        new User({
          email,
          photo,
          ...names,
          [`${strategy.toLowerCase()}Profile`]: {
            email,
            profileId,
          },
        }),
        strategy == ticketStrategies.LOCAL ? password : generateToken()
      ),
      function (error) {
        res.send({ error });
      }
    );
  }
);

router.post(
  '/connect-user',
  verifyToken([CONNECT_ACCOUNT]),
  async (req, res) => {
    const { password, email, strategy, profileId } = req.body;

    const userByEmail = await findUserByEmail(email);
    userByEmail[`${strategy.toLowerCase()}Profile`] = { profileId, email };
    updatedUser = await userByEmail.save();

    if (strategy == ticketStrategies.LOCAL) {
      return updatedUser.setPassword(password, async (err, passwordUser) => {
        if (err) {
          return res.send(err);
        }

        const user = await passwordUser.save();

        req.login(user, function (error) {
          res.send(user);
        });
      });
    }

    req.login(updatedUser, function (error) {
      res.send(updatedUser);
    });
  }
);

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (error, user, info) => {
    if (!user)
      return res.send({
        error: 'You have provided an invalid username or password',
      });
    req.logIn(user, error => {
      res.send({ error });
    });
  })(req, res, next);
});

router.post(
  '/verify-token',
  verifyToken([CREATE_ACCOUNT, CONNECT_ACCOUNT, RESET_PASSWORD]),
  (req, res) => {
    const { action, strategy } = req.body;
    res.send({ error: null, action, strategy });
  }
);

router.get('/logout', (req, res) => {
  req.logout();
  res.send(req.user);
});

router.post('/reset-password', async (req, res) => {
  const { email } = req.body;

  if (await findUserByEmail(email)) {
    await sendPasswordResetMessage(req.headers.host, email);
    return res.send();
  }

  return res.send({ error: 'No account for this email address exists.' });
});

router.post('/password', verifyToken([RESET_PASSWORD]), async (req, res) => {
  const { password, email } = req.body;

  const userByEmail = await findUserByEmail(email);
  await userByEmail.setPassword(password);

  const updatedUser = await userByEmail.save();
  req.login(updatedUser, function (error) {
    res.send({ error });
  });
});

module.exports = router;
