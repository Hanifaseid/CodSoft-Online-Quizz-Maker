import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Welcome to the Quiz Maker</h1>
      <p>Test your knowledge with fun and interactive quizzes.</p>
      <Link to="/quiz-list" className="btn btn-primary" style={{backgroundColor:'purple',borderColor:'purple'}}>Take a Quiz</Link>
      <br />
      <Link to="/create-quiz" className="btn btn-secondary mt-3">Create a Quiz</Link>
    </div>
  );
};

export default HomePage;
