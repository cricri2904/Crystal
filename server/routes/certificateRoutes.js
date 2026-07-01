const express = require('express');
const Certificate = require('../models/Certificate');
const User = require('../models/User');

const router = express.Router();

// Get user certificates
router.get('/:userId', async (req, res) => {
  try {
    const certificates = await Certificate.find({ userId: req.params.userId });
    res.json(certificates);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Award certificate
router.post('/:userId/:level', async (req, res) => {
  try {
    const certificateText = `Congrats, Crystal! You have now made it to the ${req.params.level} stage.`;
    
    const certificate = new Certificate({
      userId: req.params.userId,
      level: req.params.level,
      certificateText,
    });
    await certificate.save();

    // Add to user's unlocked certificates
    await User.findByIdAndUpdate(
      req.params.userId,
      { $push: { unlockedCertificates: certificate._id } }
    );

    res.status(201).json(certificate);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
