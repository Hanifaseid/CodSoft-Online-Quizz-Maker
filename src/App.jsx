import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/ Navbar'
import HomePage from './pages/HomePage';
import QuizCreationPage from './pages/QuizCreationPage';
import QuizListPage from './pages/QuizListPage';
import QuizTakingPage from './pages/QuizTakingPage';
import LoginPage from './pages/LoginPage';
import './App.css';



function App() {

  const [quizzes,setQuizzes] = useState([]);

  const addQuiz = (quiz) => {
    setQuizzes([...quizzes, quiz]);
  };

  const deleteQuiz = (quizId) => {
    setQuizzes(quizzes.filter((quiz) => quiz.id!== quizId));
  };
  
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-quiz" element={<QuizCreationPage />} />
          <Route path="/quiz-list" element={<QuizListPage />} />
          <Route path="/take-quiz/:quizId" element={<QuizTakingPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
