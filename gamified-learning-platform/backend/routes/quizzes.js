const express = require('express');
const Quiz = require('../models/Quiz');
const auth = require('../middleware/auth');
const router = express.Router();

// Get quiz for a module
router.get('/:moduleId', auth, async (req, res) => {
  try {
    const quiz = await Quiz.findOne({ moduleId: req.params.moduleId });
    if (!quiz) return res.status(404).json({ msg: 'Quiz not found' });
    res.json(quiz);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Submit quiz answers
router.post('/:id/submit', auth, async (req, res) => {
  try {
    const { answers, score } = req.body;
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) return res.status(404).json({ msg: 'Quiz not found' });

    // Calculate score based on answers
    let calculatedScore = 0;
    quiz.questions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) {
        calculatedScore += q.points;
      }
    });

    // Update user progress and points
    // ... logic to update Progress and User models ...

    res.json({ score: calculatedScore, message: 'Quiz submitted successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;