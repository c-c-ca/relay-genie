const passport = require('passport');

module.exports.addAuthRoutesTo =
  router =>
  ({ name, scope }) => {
    router.get(`/${name}`, passport.authenticate(name, { scope }));
    router.get(`/${name}/callback`, passport.authenticate(name));
  };
