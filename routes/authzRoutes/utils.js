const passport = require('passport');

module.exports.addAuthzRoutesTo =
  router =>
  ({ name, scope }) => {
    router.get(
      `/${name}`,
      passport.authorize(`${name}-authz`, {
        scope,
        failureRedirect: '/settings',
      })
    );

    router.get(
      `/${name}/callback`,
      passport.authorize(`${name}-authz`, {
        failureRedirect: '/settings',
        successRedirect: '/',
      }),
      (req, res) => {
        res.redirect('/settings');
      }
    );
  };

// router.get(`/${name}/callback`, (req, res, next) => {
//   passport.authorize(name, (err, user, { token }) => {
//     if (err) {
//       return next(err);
//     }

//     if (!user) {
//       return res.redirect(`/welcome?${toQueryString({ token })}`);
//     }

//     req.logIn(user, err => {
//       if (err) {
//         return next(err);
//       }

//       return res.redirect('/');
//     });
//   })(req, res, next);
// });
