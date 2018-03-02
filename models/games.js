const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');

// Define the database model
const GameSchema = new mongoose.Schema({
  stadium: {
    type: String,
  },
  homeTeamScore: {
    teamId: {
      type: mongoose.Schema.ObjectId
    },
    score: {
      type: String
    }
  },
  awayTeamScore: {
    teamId: {
      type: mongoose.Schema.ObjectId
    },
    score: {
      type: String
    }
  }
});

// Use the unique validator plugin

const Game = module.exports = mongoose.model('Game', GameSchema);
