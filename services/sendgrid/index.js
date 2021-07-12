const sgMail = require('@sendgrid/mail');
const { sendgrid } = require('../../config/keys');
sgMail.setApiKey(sendgrid.key);
const { createTicketAndSendMessage } = require('./utils');

messages = ['sendEmailVerificationMessage', 'sendPasswordResetMessage'];

module.exports = messages.reduce(
  (obj, message) => ({
    ...obj,
    [message]: createTicketAndSendMessage(message),
  }),
  {}
);
