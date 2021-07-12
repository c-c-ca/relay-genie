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
  LINKEDIN_CLIENT_ID,
  LINKEDIN_CLIENT_SECRET,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
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
  clientID: LINKEDIN_CLIENT_ID,
  clientSecret: LINKEDIN_CLIENT_SECRET,
};

const github = {
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
};

const mongo = {
  username: MONGO_USERNAME,
  password: MONGO_PASSWORD,
  cluster: MONGO_CLUSTER,
  database: MONGO_DATABASE,
};

const sendgrid = {
  key: SENDGRID_KEY,
  email: SENDGRID_EMAIL,
};

const sightEngine = {
  URI: SIGHTENGINE_URI,
  api_user: SIGHTENGINE_API_USER,
  api_secret: SIGHTENGINE_API_SECRET,
};

module.exports = {
  facebook,
  github,
  google,
  linkedin,
  twitter,
  mongoURI: toMongoURI(mongo),
  cookieKey: COOKIE_KEY,
  sendgrid,
  sightEngine,
};
