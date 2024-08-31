const express = require('express');
const auth = require('../middleware/auth');
const User = require('../models/user');
const router = express.Router();

// Get user profile
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Update user profile
router.post('/', auth, async (req, res) => {
  const { education, experience, skills, careerGoals } = req.body;

  const profileFields = { education, experience, skills, careerGoals };

  try {
    let user = await User.findById(req.user.id);

    if (user) {
      user.profile = profileFields;
      await user.save();
      return res.json(user);
    }

    res.status(404).json({ msg: 'User not found' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
