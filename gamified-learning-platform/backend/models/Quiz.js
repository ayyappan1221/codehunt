const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  moduleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Module', required: true },
  questions: [{
    type: { type: String, enum: ['multiple-choice', 'true-false', 'fill-in-the-blank'], required: true },
    question: { type: String, required: true },
    options: [{ type: String }], // For multiple-choice
    correctAnswer: { type: String, required: true },
    points: { type: Number, default: 1 }
  }],
  timeLimit: { type: Number }, // in minutes
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Quiz', quizSchema);