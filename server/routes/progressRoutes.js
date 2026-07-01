const express = require('express');
const Progress = require('../models/Progress');
const User = require('../models/User');

const router = express.Router();

// Get user progress
router.get('/:userId', async (req, res) => {
  try {
    const progress = await Progress.find({ userId: req.params.userId })
      .populate('lessonId')
      .sort({ createdAt: 1 });
    res.json(progress);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Mark lesson as complete
router.post('/:userId/:lessonId/complete', async (req, res) => {
  try {
    let progress = await Progress.findOne({ userId: req.params.userId, lessonId: req.params.lessonId });
    if (!progress) {
      progress = new Progress({ userId: req.params.userId, lessonId: req.params.lessonId });
    }
    progress.completed = true;
    progress.completedAt = new Date();
    await progress.save();

    // Update user overall progress
    const allProgress = await Progress.find({ userId: req.params.userId });
    const completedCount = allProgress.filter(p => p.completed).length;
    const totalCount = allProgress.length;
    const overallProgress = (completedCount / totalCount) * 100;

    await User.findByIdAndUpdate(req.params.userId, { overallProgress });

    res.json(progress);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
