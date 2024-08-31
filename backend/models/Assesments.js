// models/Assessment.js
const mongoose = require('mongoose');

const AssessmentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  answers: {
    type: Map,
    of: String,
  },
  competencyResults: {
    type: Map,
    of: Number, // Score or percentage for each competency
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Assessment', AssessmentSchema);
