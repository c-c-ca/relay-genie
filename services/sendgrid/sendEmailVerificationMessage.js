const { model } = require('mongoose');
const Ticket = model('tickets');
const { APP_NAME } = require('../../config');
const { findUserByEmail } = require('../../models/utils');
const { ticketActionTypes, ticketStrategies } = require('../../models/Ticket');
const { CREATE_ACCOUNT, CONNECT_ACCOUNT, RESET_PASSWORD } = ticketActionTypes;

const { createTemplate, toAnchorTag } = require('./utils');

const applyTextTemplate = url => `
Hello,

Thanks for joining ${APP_NAME}!
To verify your email address please copy the link below and paste it in your address bar: ${url}
`;

const applyHtmlTemplate = url => `
Hello,

Thanks for joining ${APP_NAME}!
To verify your email address please click the link below.
${toAnchorTag(url, 'Click to Verify')}
`;

const template = createTemplate({
  title: 'Verify Your Email',
  path: 'welcome',
  applyTextTemplate,
  applyHtmlTemplate,
});

const createTicket = async email => {
  const userByEmail = await findUserByEmail(email);

  let action;
  if (userByEmail) {
    action = userByEmail.localProfile.email ? RESET_PASSWORD : CONNECT_ACCOUNT;
  } else {
    action = CREATE_ACCOUNT;
  }

  return await new Ticket({
    email,
    action,
    strategy: ticketStrategies.LOCAL,
  }).save();
};

const queryStringParams = ({ token }) => ({
  token,
});

const ticketToPath = ({ action }) => {
  switch (action) {
    case CONNECT_ACCOUNT:
      return 'connect-account';
    case RESET_PASSWORD:
      return 'reset-password';
    default:
      return 'welcome';
  }
};

module.exports = {
  template,
  createTicket,
  queryStringParams,
  ticketToPath,
};
