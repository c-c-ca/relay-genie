const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  googleProfile: { profileId: String },
  facebookProfile: { profileId: String },
});

model('users', userSchema);
