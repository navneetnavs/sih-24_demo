// routes/jobRecommendation.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Assessment = require('../models/Assessment');
const Job = require('../models/Job'); // Create a Job model if not already created

// @route    GET api/job-recommendation
// @desc     Get job recommendations
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const assessments = await Assessment.find({ user: req.user.id });
    
    // Dummy logic for recommendation based on assessment results
    const recommendations = [];
    
    assessments.forEach(assessment => {
      const { competencyResults } = assessment;
      // Logic to match jobs based on competencyResults
      // E.g., if competency in "communication" is high, recommend communication-related jobs
      if (competencyResults.communication >= 4) {
        recommendations.push({
          title: "Communication Specialist",
          description: "Excellent communication skills required.",
        });
      }
      // Add more job matching logic here
    });

    res.json(recommendations);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
