const sgMail = require('@sendgrid/mail');
const { sendgrid } = require('../../config/keys');

const { model } = require('mongoose');
const Ticket = model('tickets');
const { ticketStrategies, ticketActionTypes } = require('../../models/Ticket');

const toUrl = domain => (path, token) =>
  `http://${domain}/${path}?token=${token}`;

const toAnchorTag = innerHTML =>
  `<a href=${toURL(path, token)}>${innerHTML}</a>`;

const emailVerificationHTML = (fullName, url) => `
Hello ${fullName},

Thanks for joining RelayHero!  
To verify your email address please click the link below.
${toAnchorTag('Click to Verify', url)}
`;

const emailVerificationText = (fullName, url) => `
Hello ${fullName},

Thanks for joining RelayHero!  
To verify your email address please copy the link below and paste it in your address bar: ${url}
`;

emailVerificationMessage = url => ({
  title: 'Verify Your Email',
  text: emailVerificationText(url),
  html: emailVerificationHTML(url),
});

const sendMessage = ({ title, text, html }, ticket) =>
  sgMail.send({
    to: email,
    from: sendgrid.email,
    subject: `RelayHero | ${title}`,
    text,
    html,
  });

const createTicket = async (profileId, email, strategy) =>
  await new Ticket({
    profileId,
    strategy: ticketStrategies[strategy.toUpperCase()],
    action: ticketActionTypes.CREATE_ACCOUNT,
  }).save();

const sendMessageAndCreateTicket =
  message => async (host, profileId, email, strategy) => {
    sendMessage(
      ...message,
      email,
      await createTicket(host, profileId, strategy)
    );
  };

const sendEmailVerificationMessage = sendMessageAndCreateTicket(
  emailVerificationMessage
);

const sendMessage = (subject, text, path) => (email, domain, token) =>
  sgMail.send();

module.exports = { sendEmailVerificationMessage };
