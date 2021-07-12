module.exports = [
  {
    name: 'google',
    module: require('passport-google-oauth20'),
  },
  {
    name: 'facebook',
    module: require('passport-facebook'),
    options: {
      profileFields: ['id', 'email'],
    },
  },
  {
    name: 'twitter',
    module: require('passport-twitter'),
    options: {
      includeEmail: true,
    },
  },
  {
    name: 'linkedin',
    module: require('passport-linkedin-oauth2'),
    options: {
      scope: ['r_emailaddress', 'r_liteprofile'],
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
