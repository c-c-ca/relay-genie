const passport = require('passport');
const keys = require('../../config/keys');

module.exports = ({ module: { Strategy }, name, options }) =>
  passport.use(
    `${name}-authz`,
    new Strategy(
      {
        ...keys[name],
        ...options,
        callbackURL: `/connect/${name}/callback`,
        passReqToCallback: true,
        proxy: true,
      },
      async (
        req,
        accessToken,
        refreshToken,
        { id: profileId, emails },
        done
      ) => {
        if (!req.user) {
          done({ error: 'User not logged in' });
        }

        const [{ value: email }] = emails;

        req.user[`${name}Profile`] = { profileId, email };
        await req.user.save();

        done(null, req.user);
      }
    )
  );
