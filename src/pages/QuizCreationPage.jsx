import React, { useState } from 'react';
import QuestionForm from '../components/QuestionForm';

const QuizCreationPage = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null); // Track selected quiz

  const addQuestion = (question) => {
    setQuestions([...questions, question]);
  };

  const handleSubmit = () => {
    // Handle quiz submission
    console.log('Quiz submitted:', { selectedQuiz, questions });
  };

  // Sample hardcoded quizzes
  const availableQuizzes = [
    { id: 1, title: "General Knowledge", category: "Miscellaneous" },
    { id: 2, title: "Science", category: "Science" },
    { id: 3, title: "Mathematics", category: "Math" },
    { id: 4, title: "History", category: "History" },
    { id: 5, title: "Geography", category: "Geography" },
    { id: 6, title: "Literature", category: "Arts" },
    { id: 7, title: "Movies & Entertainment", category: "Entertainment" },
    { id: 8, title: "Sports", category: "Sports" },
    { id: 9, title: "Technology", category: "Technology" },
  ];

  // Handle select button click to set the selected quiz
  const handleSelectQuiz = (quiz) => {
    setSelectedQuiz(quiz);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg rounded-4 p-4">
            {/* Header */}
            <h2 className="text-center text-purple mb-4">Create Your New Quiz</h2>

            {/* Quiz Selection Section */}
            <h3 className="text-center mb-3 text-secondary">Choose a Category for Your Quiz</h3>
            <ul className="list-group mb-4">
              {availableQuizzes.map((quiz) => (
                <li key={quiz.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <strong>{quiz.title}</strong>
                    <p className="mb-0 text-muted">{quiz.category}</p>
                  </div>
                  <button
                    className="btn btn-outline-primary btn-sm" style={{backgroundColor:'purple',color:'white',borderColor:'purple'}}
                    onClick={() => handleSelectQuiz(quiz)} // Set selected quiz on click
                  >
                    Select
                  </button>
                </li>
              ))}
            </ul>

            {/* Show selected quiz */}
            {selectedQuiz && (
              <div className="alert alert-info mb-4" style={{backgroundColor:'rgb(228, 169, 228)',borderColor:'purple',color:'black'}}>
                <strong>Selected Quiz:</strong> {selectedQuiz.title} - {selectedQuiz.category}
              </div>
            )}

            {/* Quiz Creation Form */}
            {selectedQuiz && (
              <div className="mb-4">
                <h4 className="text-center text-purple">Add Questions to Your Quiz</h4>
                <QuestionForm addQuestion={addQuestion} />
              </div>
            )}

            {/* Question List */}
            <div className="mb-4">
              <h5 className="text-center text-purple">Current Questions</h5>
              {questions.length > 0 ? (
                <ul className="list-group">
                  {questions.map((question, index) => (
                    <li key={index} className="list-group-item">
                      <strong>Question {index + 1}:</strong> {question.question}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-center text-muted">No questions added yet.</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-success btn-lg w-50 mt-4" style={{backgroundColor:'purple',borderColor:'purple'}}
                onClick={handleSubmit}
                disabled={!selectedQuiz} // Disable if no quiz is selected
              >
                Submit Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizCreationPage;
