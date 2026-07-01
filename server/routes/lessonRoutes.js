const express = require('express');
const Lesson = require('../models/Lesson');

const router = express.Router();

// Get all lessons
router.get('/', async (req, res) => {
  try {
    const lessons = await Lesson.find().sort({ week: 1, day: 1 });
    res.json(lessons);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get lesson by day and week
router.get('/:week/:day', async (req, res) => {
  try {
    const lesson = await Lesson.findOne({ week: req.params.week, day: req.params.day });
    if (!lesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }
    res.json(lesson);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Create lesson (admin)
router.post('/', async (req, res) => {
  try {
    const lesson = new Lesson(req.body);
    await lesson.save();
    res.status(201).json(lesson);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
