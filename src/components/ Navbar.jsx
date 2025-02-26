import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-custom shadow-sm">
      <div className="container">
        <Link  className="navbar-brand text-purple fw-bold fs-3" to="/">
          Quiz Maker
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-purple px-3 py-2 rounded-3 transition-all hover:bg-purple-light hover:text-white" to="/quiz-list">
                Quizzes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-purple px-3 py-2 rounded-3 transition-all hover:bg-purple-light hover:text-white" to="/create-quiz">
                Create Quiz
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-purple px-3 py-2 rounded-3 transition-all hover:bg-purple-light hover:text-white" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
