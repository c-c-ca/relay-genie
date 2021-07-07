const passport = require('passport');
const { model } = require('mongoose');
const keys = require('../../config/keys');

const User = model('users');

passport.serializeUser(({ id }, done) => done(null, id));

passport.deserializeUser(async (id, done) =>
  done(null, await User.findById(id))
);

const strategies = [
  {
    name: 'google',
    strategy: require('passport-google-oauth20').Strategy,
  },
  {
    name: 'facebook',
    strategy: require('passport-facebook').Strategy,
    options: { profileFields: ['id', 'email'] },
  },
  {
    name: 'twitter',
    strategy: require('passport-twitter').Strategy,
  },
  {
    name: 'linkedin',
    strategy: require('passport-linkedin'),
    options: {
      profileFields: [
        'id',
        'first-name',
        'last-name',
        'email-address',
        'headline',
      ],
    },
  },
];

strategies.forEach(({ strategy: Strategy, name, options }) =>
  passport.use(
    new Strategy(
      {
        ...keys[name],
        ...options,
        callbackURL: `/auth/${name}/callback`,
        proxy: true,
      },
      async (accessToken, refreshToken, { id: profileId }, done) => {
        const profileSubdoc = {
          [`${name}Profile`]: { profileId },
        };

        done(
          null,
          (await User.findOne(profileSubdoc)) ||
            (await new User(profileSubdoc).save())
        );
      }
    )
  )
);
