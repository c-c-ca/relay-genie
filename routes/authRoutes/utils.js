const passport = require('passport');
const { toQueryString } = require('../../utils');
const {
  ticketActionTypes: { CREATE_ACCOUNT },
} = require('../../models/Ticket');

module.exports.addAuthRoutesTo =
  router =>
  ({ name, scope }) => {
    router.get(`/${name}`, passport.authenticate(name, { scope }));

    router.get(`/${name}/callback`, (req, res, next) => {
      passport.authenticate(name, (err, user, { token, action }) => {
        if (err) {
          return next(err);
        }

        if (!user) {
          return res.redirect(
            `/${
              action == CREATE_ACCOUNT ? 'welcome' : 'connect-account'
            }?${toQueryString({ token })}`
          );
        }

        req.logIn(user, err => {
          if (err) {
            return next(err);
          }

          return res.redirect('/');
        });
      })(req, res, next);
    });
  };
