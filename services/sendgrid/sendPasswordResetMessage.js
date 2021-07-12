const { model } = require('mongoose');
const Ticket = model('tickets');
const { APP_NAME } = require('../../config');
const { ticketActionTypes } = require('../../models/Ticket');

const { createTemplate, toAnchorTag } = require('./utils');

const applyTextTemplate = url => `
Hello,

Thanks for being a part of ${APP_NAME}!
To reset your password, please copy the link below and paste it in your address bar: ${url}
`;

const applyHtmlTemplate = url => `
Hello,

Thanks for being a part of ${APP_NAME}!
To reset your password, please click the link below.
${toAnchorTag(url, 'Click to Verify')}
`;

const template = createTemplate({
  title: 'Password Reset',
  applyTextTemplate,
  applyHtmlTemplate,
});

const createTicket = async email =>
  await new Ticket({
    email,
    action: ticketActionTypes.RESET_PASSWORD,
  }).save();

const queryStringParams = ({ token }) => ({
  token,
});

const ticketToPath = () => 'reset-password';

module.exports = {
  template,
  createTicket,
  queryStringParams,
  ticketToPath,
};
