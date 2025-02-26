import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const QuizTakingPage = () => {
  const { quizId } = useParams(); // Get the quiz ID from the URL
  const [quiz, setQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Sample questions based on quiz category
  const sampleQuizzes = [
    {
      id: 1,
      title: "General Knowledge",
      questions: [
        { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], correctAnswer: "Paris" },
        { question: "Who wrote 'Romeo and Juliet'?", options: ["Shakespeare", "Dickens", "Austen", "Hemingway"], correctAnswer: "Shakespeare" },
        { question: "Which planet is closest to the sun?", options: ["Mercury", "Venus", "Earth", "Mars"], correctAnswer: "Mercury" },
      ],
    },
    {
      id: 2,
      title: "Science",
      questions: [
        { question: "What is the chemical symbol for water?", options: ["H2O", "CO2", "O2", "H2"], correctAnswer: "H2O" },
        { question: "Who developed the theory of relativity?", options: ["Einstein", "Newton", "Tesla", "Galileo"], correctAnswer: "Einstein" },
        { question: "What is the boiling point of water?", options: ["100°C", "50°C", "200°C", "0°C"], correctAnswer: "100°C" },
      ],
    },
    {
      id: 3,
      title: "Mathematics",
      questions: [
        { question: "What is 5 + 7?", options: ["10", "11", "12", "13"], correctAnswer: "12" },
        { question: "What is the square root of 64?", options: ["6", "7", "8", "9"], correctAnswer: "8" },
        { question: "What is 15 × 3?", options: ["45", "30", "60", "50"], correctAnswer: "45" },
      ],
    },
    {
      id: 4,
      title: "History",
      questions: [
        { question: "Who was the first president of the United States?", options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"], correctAnswer: "George Washington" },
        { question: "What year did World War I start?", options: ["1912", "1914", "1916", "1918"], correctAnswer: "1914" },
        { question: "Who was the first woman to fly solo across the Atlantic?", options: ["Amelia Earhart", "Harriet Tubman", "Clara Barton", "Bessie Coleman"], correctAnswer: "Amelia Earhart" },
      ],
    },
    {
      id: 5,
      title: "Geography",
      questions: [
        { question: "What is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], correctAnswer: "Nile" },
        { question: "What is the capital of Japan?", options: ["Seoul", "Beijing", "Tokyo", "Bangkok"], correctAnswer: "Tokyo" },
        { question: "Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "South Korea", "Thailand"], correctAnswer: "Japan" },
      ],
    }
  ];

  useEffect(() => {
    const quizData = sampleQuizzes.find(quiz => quiz.id === parseInt(quizId)); // Find quiz by ID
    setQuiz(quizData);
  }, [quizId]);

  const handleAnswerChange = (answer) => {
    // Track the selected answer for each question
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answer;
    setAnswers(newAnswers);

    // Move to the next question
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleFinishQuiz = () => {
    setQuizCompleted(true);
  };

  const getAnswerClass = (questionIndex, answer) => {
    if (!quizCompleted) return '';

    const correctAnswer = quiz.questions[questionIndex].correctAnswer;
    if (answer === correctAnswer) {
      return 'bg-success text-white'; // Correct answer
    } else if (answer) {
      return 'bg-danger text-white'; // Incorrect answer
    }
    return ''; // Default if no answer selected
  };

  if (!quiz) {
    return <div>Loading quiz...</div>;
  }

  return (
    <div className="container mt-5">
      <h2>{quiz.title}</h2>
      <div className="question-container">
        <p>{quiz.questions[currentQuestionIndex].question}</p>
        <div>
          {quiz.questions[currentQuestionIndex].options.map((option, index) => (
            <button
              key={index}
              className={`btn m-2 ${answers[currentQuestionIndex] === option ? 'btn-primary' : 'btn-outline-secondary'}`}
              onClick={() => handleAnswerChange(option)} 
            >
              {option}
            </button>
          ))}
        </div>

        {/* Space between "Add Option" and "Submit Question" */}
        <div className="mt-3"></div>

        {currentQuestionIndex === quiz.questions.length - 1 && (
          <button className="btn btn-success mt-3" onClick={handleFinishQuiz} style={{backgroundColor:'purple',borderColor:'purple'}}>Finish Quiz</button>
        )}
      </div>

      {/* Display results after quiz completion */}
      {quizCompleted && (
        <div className="mt-5">
          <h4>Quiz Results</h4>
          <ul className="list-group">
            {quiz.questions.map((question, index) => (
              <li key={index} className={`list-group-item ${getAnswerClass(index, answers[index])}`}>
                <strong>{question.question}</strong>
                <p>Your answer: {answers[index]}</p>
                <p >
                  Correct answer: <span className="fw-bold">{question.correctAnswer}</span>
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-3">
            You got {answers.filter((answer, index) => answer === quiz.questions[index].correctAnswer).length} out of {quiz.questions.length} correct!
          </p>
        </div>
      )}
    </div>
  );
};

export default QuizTakingPage;

