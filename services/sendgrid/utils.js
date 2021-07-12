const sgMail = require('@sendgrid/mail');
const { sendgrid } = require('../../config/keys');
const { APP_NAME } = require('../../config');
const { toQueryString } = require('../../utils');
const { model } = require('mongoose');
const Ticket = model('tickets');

const toUrl = (domain, path, params) =>
  `http://${domain}/${path}?${toQueryString(params)}`;

const toAnchorTag = (url, innerHTML) => `<a href=${url}>${innerHTML}</a>`;

// const sendMessage = ({ title, text, html }, email) =>
//   sgMail.send({
//     to: email,
//     from: sendgrid.email,
//     subject: `${APP_NAME} | ${title}`,
//     text,
//     html,
//   });

const sendMessage = ({ title, text, html }, email) =>
  console.log({
    to: email,
    from: sendgrid.email,
    subject: `${APP_NAME} | ${title}`,
    text,
    html,
  });

const createTicketAndSendMessage = moduleName => {
  const {
    template,
    createTicket,
    queryStringParams,
    ticketToPath,
  } = require(`./${moduleName}`);

  return async (host, email) => {
    const ticket = await createTicket(email);
    return sendMessage(
      template(host, ticketToPath(ticket), queryStringParams(ticket)),
      email
    );
  };
};

const createTemplate =
  ({ title, applyTextTemplate, applyHtmlTemplate }) =>
  (host, path, params) => {
    const url = toUrl(host, path, params);
    return {
      title,
      text: applyTextTemplate(url),
      html: applyHtmlTemplate(url),
    };
  };

module.exports = {
  createTemplate,
  toAnchorTag,
  createTicketAndSendMessage,
};
