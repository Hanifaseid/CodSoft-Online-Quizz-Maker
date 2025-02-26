import React, { useState } from 'react';

const QuestionForm = ({ addQuestion }) => {
  const [questionText, setQuestionText] = useState('');
  const [options, setOptions] = useState([{ optionText: '', isCorrect: false }]);

  const handleAddOption = () => {
    setOptions([...options, { optionText: '', isCorrect: false }]);
  };

  const handleSubmit = () => {
    addQuestion({ questionText, options });
    setQuestionText('');
    setOptions([{ optionText: '', isCorrect: false }]);
  };

  return (
    <div className="mb-4">
      <label className="form-label">Question</label>
      <input
        type="text"
        className="form-control mb-3"  // Add space between question input and options
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
        placeholder="Enter question text"
      />
      <div>
        {options.map((option, index) => (
          <div key={index} className="d-flex align-items-center mb-3">
            <input
              type="text"
              className="form-control me-2"  // Add margin between option text and checkbox
              value={option.optionText}
              onChange={(e) =>
                setOptions(
                  options.map((opt, idx) =>
                    idx === index
                      ? { ...opt, optionText: e.target.value }
                      : opt
                  )
                )
              }
              placeholder={`Option ${index + 1}`}
            />
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                checked={option.isCorrect}
                onChange={() =>
                  setOptions(
                    options.map((opt, idx) =>
                      idx === index
                        ? { ...opt, isCorrect: !opt.isCorrect }
                        : opt
                    )
                  )
                }
              />
              <label className="form-check-label">Correct</label>
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-secondary mt-2" onClick={handleAddOption}>
        Add Option
      </button>
      <button className="btn btn-primary mt-3 ms-2" onClick={handleSubmit} style={{backgroundColor:'purple',borderColor:'purple'}}>
        Submit Question
      </button>
    </div>
  );
};

export default QuestionForm;
