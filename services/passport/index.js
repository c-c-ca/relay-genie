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
    module: require('passport-google-oauth20'),
  },
  {
    name: 'facebook',
    module: require('passport-facebook'),
    options: { profileFields: ['id', 'email'] },
  },
  {
    name: 'twitter',
    module: require('passport-twitter'),
  },
  {
    name: 'linkedin',
    module: require('passport-linkedin-oauth2'),
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
  {
    name: 'github',
    module: require('passport-github2'),
  },
];

strategies.forEach(({ module: { Strategy }, name, options }) =>
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
