const passport = require('passport');
const { model } = require('mongoose');
const keys = require('../../config/keys');

const User = model('users');

passport.serializeUser(({ id }, done) => done(null, id));

passport.deserializeUser(async (id, done) =>
  done(null, await User.findById(id))
);

const strategies = [
  { module: require('passport-google-oauth20'), name: 'google' },
  { module: require('passport-facebook'), name: 'facebook' },
];

strategies.forEach(({ module: { Strategy }, name }) =>
  passport.use(
    new Strategy(
      { ...keys[name], callbackURL: `/auth/${name}/callback`, proxy: true },
      async (
        accessToken,
        refreshToken,
        { id: profileId, ...profile },
        done
      ) => {
        console.log(profile);
        const profile = {
          [`${name}Profile`]: { profileId },
        };

        done(
          null,
          (await User.findOne(profile)) || (await new User(profile).save())
        );
      }
    )
  )
);
