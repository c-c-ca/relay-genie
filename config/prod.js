const { toMongoURI } = require('./utils');

const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  FACEBOOK_CLIENT_ID,
  FACEBOOK_CLIENT_SECRET,
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_CLUSTER,
  MONGO_DATABASE,
  COOKIE_KEY,
} = process.env;

const google = {
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
};

const facebook = {
  clientID: FACEBOOK_CLIENT_ID,
  clientSecret: FACEBOOK_CLIENT_SECRET,
};

const mongo = {
  username: MONGO_USERNAME,
  password: MONGO_PASSWORD,
  cluster: MONGO_CLUSTER,
  database: MONGO_DATABASE,
};

module.exports = {
  google,
  facebook,
  mongoURI: toMongoURI(mongo),
  cookieKey: COOKIE_KEY,
};
