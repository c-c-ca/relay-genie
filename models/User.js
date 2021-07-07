const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  googleProfile: {
    profileId: String,
    email: String,
  },
  facebookProfile: {
    profileId: String,
    email: String,
  },
  twitterProfile: {
    profileId: String,
    email: String,
  },
  linkedinProfile: {
    profileId: String,
    email: String,
  },
  githubProfile: {
    profileId: String,
    email: String,
  },
});

model('users', userSchema);
