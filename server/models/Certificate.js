const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  level: {
    type: String,
    enum: ['Absolute Beginner', 'Advanced Beginner', 'Intermediate'],
    required: true,
  },
  unlockedAt: {
    type: Date,
    default: Date.now,
  },
  certificateText: {
    type: String,
    // Format: "Congrats, Crystal! You have now made it to the [level] stage."
  },
});

module.exports = mongoose.model('Certificate', certificateSchema);
