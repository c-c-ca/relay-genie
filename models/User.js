const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  googleProfile: { profileId: String },
  facebookProfile: { profileId: String },
  twitterProfile: { profileId: String },
  linkedinProfile: { profileId: String },
  githubProfile: { profileId: String },
});

model('users', userSchema);
