const { Router } = require('express');
const router = Router();

const { model } = require('mongoose');
const User = model('users');

const {
  loggedIn,
  validateUsername,
  uniqueUsername,
} = require('../../middlewares');

router.post(
  '/',
  loggedIn,
  validateUsername,
  uniqueUsername,
  async (req, res) => {
    const { username, firstName, lastName } = req.body;

    req.user.username = username;
    req.user.firstName = firstName;
    req.user.lastName = lastName;
    await req.user.save();

    res.send({ error: null });
  }
);

router.delete('/', loggedIn, async (req, res) => {
  await User.findByIdAndDelete(req.user.id);
  req.logout();
  res.send({ error: null });
});

module.exports = router;
