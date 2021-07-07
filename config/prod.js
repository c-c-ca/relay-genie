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
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET,
  LINKEDIN_CONSUMER_KEY,
  LINKEDIN_CONSUMER_SECRET,
} = process.env;

const google = {
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
};

const facebook = {
  clientID: FACEBOOK_CLIENT_ID,
  clientSecret: FACEBOOK_CLIENT_SECRET,
};

const twitter = {
  consumerKey: TWITTER_CONSUMER_KEY,
  consumerSecret: TWITTER_CONSUMER_SECRET,
};

const linkedin = {
  consumerKey: LINKEDIN_CONSUMER_KEY,
  consumerSecret: LINKEDIN_CONSUMER_SECRET,
};

const mongo = {
  username: MONGO_USERNAME,
  password: MONGO_PASSWORD,
  cluster: MONGO_CLUSTER,
  database: MONGO_DATABASE,
};

module.exports = {
  facebook,
  google,
  linkedin,
  twitter,
  mongoURI: toMongoURI(mongo),
  cookieKey: COOKIE_KEY,
};
