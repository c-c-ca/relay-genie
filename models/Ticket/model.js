const { Schema, model } = require('mongoose');
const { generateToken } = require('../../utils');

const ticketSchema = new Schema({
  token: String,
  action: String,
  strategy: String,
  profileId: String,
  photo: String,
  firstName: String,
  lastName: String,
  email: String,
});

ticketSchema.pre('save', function () {
  if (!this.token) {
    this.token = generateToken();
  }
});

model('tickets', ticketSchema);
