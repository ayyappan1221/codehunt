import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quiz = ({ moduleId }) => {
  const [quiz, setQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const res = await axios.get(`/api/quizzes/${moduleId}`);
        setQuiz(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchQuiz();
  }, [moduleId]);

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
    if (answer === quiz.questions[currentQuestion].correctAnswer) {
      setScore(score + quiz.questions[currentQuestion].points);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const submitQuiz = async () => {
    try {
      await axios.post(`/api/quizzes/${quiz._id}/submit`, { answers, score });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    }
  };

  if (!quiz) return <div>Loading...</div>;

  if (submitted) return <div>Quiz submitted! Your score: {score}</div>;

  if (currentQuestion >= quiz.questions.length) {
    return (
      <div>
        <p>Quiz Complete! Your score: {score}</p>
        <button onClick={submitQuiz}>Submit Quiz</button>
      </div>
    );
  }

  const question = quiz.questions[currentQuestion];

  return (
    <div>
      <h3>{question.question}</h3>
      {question.type === 'multiple-choice' && question.options.map(option => (
        <button key={option} onClick={() => handleAnswer(option)}>{option}</button>
      ))}
      {question.type === 'true-false' && (
        <>
          <button onClick={() => handleAnswer('true')}>True</button>
          <button onClick={() => handleAnswer('false')}>False</button>
        </>
      )}
      {question.type === 'fill-in-the-blank' && (
        <input type="text" onChange={(e) => setAnswers({ ...answers, [currentQuestion]: e.target.value })} />
      )}
    </div>
  );
};

export default Quiz;