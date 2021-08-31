const passport = require('passport');
const { model } = require('mongoose');
const Ticket = model('tickets');
const User = model('users');
const keys = require('../../config/keys');
const { findUserByEmail } = require('../../models/utils');
const { ticketActionTypes } = require('../../models/Ticket');

module.exports = ({ module: { Strategy }, name: strategyName, options }) =>
  passport.use(
    new Strategy(
      {
        ...keys[strategyName],
        ...options,
        callbackURL: `/auth/${strategyName}/callback`,
        proxy: true,
      },
      async (
        accessToken,
        refreshToken,
        { id: profileId, emails, photos, name },
        done
      ) => {
        // Has the User already registered with this strategy?
        const userByProfileId = await User.findOne({
          [`${strategyName}Profile.profileId`]: profileId,
        });

        if (userByProfileId) return done(null, userByProfileId);

        const [{ value: email }] = emails;

        // Has the User registered using another strategy?
        const userByEmail = await findUserByEmail(email);

        const [{ value: photo }] = photos;
        const { givenName: firstName, familyName: lastName } = name;
        const { CREATE_ACCOUNT, CONNECT_ACCOUNT } = ticketActionTypes;
        // Add an option for the user to select a primary email
        // when creating an account
        // In other words, the ticket should have a list of emails
        // rather than a single email, which will be used at a later
        // point to display a list of possible emails that the user
        // may select from
        const { token, action } = await Ticket({
          profileId,
          email,
          firstName,
          lastName,
          photo,
          action: userByEmail ? CONNECT_ACCOUNT : CREATE_ACCOUNT,
          strategy: strategyName.toUpperCase(),
        }).save();

        done(null, false, { token, action });
      }
    )
  );
