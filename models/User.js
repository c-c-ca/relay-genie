const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  googleProfile: { profileId: String },
});

model('users', userSchema);
