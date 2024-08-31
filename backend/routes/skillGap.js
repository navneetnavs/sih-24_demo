// routes/skillGap.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');
const Job = require('../models/Job'); // Assuming Job model has required skills

// @route    GET api/skill-gap
// @desc     Analyze skill gaps
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const jobs = await Job.find(); // Fetch all jobs for simplicity

    const skillGaps = jobs.map(job => {
      const requiredSkills = job.requiredSkills || [];
      const userSkills = user.skills || [];
      const gap = requiredSkills.filter(skill => !userSkills.includes(skill));
      return {
        jobTitle: job.title,
        skillGap: gap,
      };
    });

    res.json(skillGaps);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
