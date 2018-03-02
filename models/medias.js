const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');

// Define the database model
const MediaSchema = new mongoose.Schema({
  playerId: {
    type: String,
  },
  path: {
  	type: String
  },
  type: {
  	type: String
  }
});

// Use the unique validator plugin

const Media = module.exports = mongoose.model('Media', MediaSchema);
