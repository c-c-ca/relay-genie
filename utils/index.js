const { ticketStrategies } = require('../models/Ticket');

const crypto = require('crypto');

const generateToken = () => crypto.randomBytes(64).toString('hex');

const toQueryString = params =>
  Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

// const strategyNames = Object.values(ticketStrategies).map(s => s.toLowerCase());

// const userProfileFields = strategyNames.map(name => `${name}Profile`);

module.exports = {
  generateToken,
  toQueryString,
  // strategyNames,
  // userProfileFields,
};
