const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  day: {
    type: Number,
    required: true,
  },
  week: {
    type: Number,
    required: true,
  },
  level: {
    type: String,
    enum: ['Absolute Beginner', 'Advanced Beginner', 'Intermediate'],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  song: {
    type: String,
    required: true,
  },
  objectives: [{
    type: String,
  }],
  recap: {
    title: String,
    content: String,
    duration: Number, // in minutes
  },
  mainLesson: {
    title: String,
    content: String,
    resources: [{
      type: String,
      url: String,
    }],
    duration: Number, // in minutes
  },
  plenary: {
    title: String,
    content: String,
    reflection: String,
    duration: Number, // in minutes
  },
  skillsFocused: [{
    type: String,
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Lesson', lessonSchema);
