const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');

// Define the database model
const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required.'],
  },
  id: {
  	type: Number
  }
});

// Use the unique validator plugin

const Team = module.exports = mongoose.model('Team', TeamSchema);
