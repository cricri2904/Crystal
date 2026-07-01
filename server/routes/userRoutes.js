const express = require('express');
const User = require('../models/User');

const router = express.Router();

// Get user profile
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .populate('completedLessons')
      .populate('unlockedCertificates');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Update user level
router.put('/:id/level', async (req, res) => {
  try {
    const { level } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { currentLevel: level },
      { new: true }
    );
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
