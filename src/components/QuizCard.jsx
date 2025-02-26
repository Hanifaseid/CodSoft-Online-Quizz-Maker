import React from 'react';

const QuizCard = ({ quiz }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">{quiz.title}</h5>
          <p className="card-text">{quiz.description}</p>
          <button className="btn btn-primary">Start Quiz</button>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
