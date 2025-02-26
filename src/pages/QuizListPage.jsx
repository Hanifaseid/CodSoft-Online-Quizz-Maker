import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const QuizListPage = () => {
  // State to hold available quizzes and loading state
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching quizzes from an API
    setLoading(false);
    setQuizzes([
      { id: 1, title: "General Knowledge", category: "Miscellaneous" },
      { id: 2, title: "Science", category: "Science" },
      { id: 3, title: "Mathematics", category: "Math" },
      { id: 4, title: "History", category: "History" },
      { id: 5, title: "Geography", category: "Geography" },
    ]);
  }, []);

  return (
    <div className="container mt-5">
      <h2>Available Quizzes</h2>
      {loading ? (
        <p>Loading quizzes...</p>
      ) : quizzes.length === 0 ? (
        <p>No quizzes available</p>
      ) : (
        <div className="list-group">
          {quizzes.map((quiz) => (
            <div key={quiz.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h5>{quiz.title}</h5>
                <p>Category: {quiz.category}</p>
              </div>
              <Link to={`/take-quiz/${quiz.id}`} className="btn btn-primary " style={{backgroundColor:'purple',borderColor:'purple'}}>
                Take Quiz
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuizListPage;
