const { Schema, model } = require('mongoose');

const ticketSchema = new Schema({
  profileId: String,
  strategy: String,
  action: String,
});

model('tickets', ticketSchema);
