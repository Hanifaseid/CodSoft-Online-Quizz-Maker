// src/pages/QuizResultsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const QuizResultsPage = ({ score, totalQuestions }) => {
  return (
    <div className="container mt-5">
      <h2>Quiz Results</h2>
      <p>Your score: {score} out of {totalQuestions}</p>
      <p>{score / totalQuestions >= 0.5 ? 'You passed!' : 'You failed, try again!'}</p>
      <Link to="/quiz-list" className="btn btn-primary mt-3" style={{backgroundColor:'purple',borderColor:'purple'}}>Go to Quiz List</Link>
    </div>
  );
};

export default QuizResultsPage;
