const mongoose = require('mongoose');
const Ticket = mongoose.model('tickets');
const User = mongoose.model('users');
const { containsProfanity } = require('../services/sightengine');

const verifyToken = actionTypes => async (req, res, next) => {
  const { token } = req.body;
  const ticket = await Ticket.findOne({ token });

  if (!ticket || !actionTypes.includes(ticket.action))
    return res.send({ error: 'No ticket exists for the given token' });

  const { strategy, email, action, profileId, displayName } = ticket;

  req.body = { ...req.body, strategy, email, action, profileId, displayName };

  next();
};

const uniqueUsername = async (req, res, next) => {
  const { username } = req.body;

  if (await User.findOne({ username })) {
    return res.send({ error: 'Username has already been taken.' });
  }

  next();
};

const validateUsername = async (req, res, next) => {
  if (await containsProfanity(req.body.username)) {
    return res.send({ error: 'Invalid username' });
  }

  next();
};

module.exports = { verifyToken, uniqueUsername, validateUsername };
