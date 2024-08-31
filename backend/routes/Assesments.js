const express = require('express');
const auth = require('../middleware/auth');
const Assessment = require('../models/Assesments');
const router = express.Router();

// Submit assessment responses
// router.post('/', auth, async (req, res) => {
//   const { responses } = req.body;

//   const totalScore = responses.reduce((sum, response) => sum + response.score, 0);

//   const newAssessment = new Assessment({
//     user: req.user.id,
//     responses,
//     totalScore,
//   });

//   try {
//     await newAssessment.save();
//     res.json(newAssessment);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

router.post('/', auth, async (req, res) => {
  const { answers, competencyResults } = req.body;

  try {
    const newAssessment = new Assessment({
      user: req.user.id,
      answers,
      competencyResults,
    });

    const assessment = await newAssessment.save();
    res.json(assessment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


// Get user assessment history
router.get('/', auth, async (req, res) => {
  try {
    const assessments = await Assessment.find({ user: req.user.id });
    res.json(assessments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
