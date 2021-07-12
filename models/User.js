const { Schema, model } = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
  email: String,
  displayName: String,
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
  localProfile: {
    email: String,
  },
});

userSchema.plugin(passportLocalMongoose);

model('users', userSchema);
