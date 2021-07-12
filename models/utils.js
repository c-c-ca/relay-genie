const { model } = require('mongoose');
const User = model('users');
const { ticketStrategies } = require('./Ticket');

const strategyNames = Object.values(ticketStrategies).map(s => s.toLowerCase());

const findUserByEmail = async email =>
  await User.findOne({
    $or: strategyNames.map(strategy => ({
      [`${strategy}Profile.email`]: email,
    })),
  });

module.exports = { findUserByEmail };
