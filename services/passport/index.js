const passport = require('passport');
const { model } = require('mongoose');
const LocalStrategy = require('passport-local');
const User = model('users');
// const Ticket = model('tickets');
const keys = require('../../config/keys');
const strategies = require('./strategies');
// const { ticketActionTypes } = require('../../models/Ticket');
// const { findUserByEmail } = require('../../models/utils');
const configureAuthCallback = require('./authConfig');
const configureConnectCallback = require('./connectConfig');

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(({ id }, done) => done(null, id));

passport.deserializeUser(async (id, done) =>
  done(null, await User.findById(id))
);

strategies.forEach(configureAuthCallback);
strategies.forEach(configureConnectCallback);
