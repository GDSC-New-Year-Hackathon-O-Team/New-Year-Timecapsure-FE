// components/WriteBox.jsx
import React, { useState, useEffect } from 'react';

const WriteBox = ({ onSubmit }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit({ question, answer });
    }
  };

  useEffect(() => {
    // Add any initialization logic if needed
  }, []);

  return (
    <div className="text-inputs">
      
      <br /><br />
      <label htmlFor="answer" style={{ marginTop: '10px'}}></label>
      <textarea
        id="answer"
        value={answer}
        onChange={handleAnswerChange}
        rows="5"
        style={{ width: '100%', marginBottom: '10px', height: '250px' }}
      />
      <br /><br />
     
    </div>
  );
};

export default WriteBox;
