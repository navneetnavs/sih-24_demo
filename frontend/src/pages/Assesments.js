// src/pages/Assessment.js
import React, { useState } from 'react';
import api from '../services/api';

const Assessment = () => {
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/assessment', { answers });
      setResults(res.data.competencyResults);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div>
      <h1>Competency Assessment</h1>
      <form onSubmit={handleSubmit}>
        {/* Sample Questions */}
        <div>
          <label>Question 1: Describe your problem-solving ability</label>
          <input type="text" name="question1" onChange={handleChange} />
        </div>
        <div>
          <label>Question 2: Rate your communication skills (1-5)</label>
          <input type="number" name="question2" onChange={handleChange} />
        </div>
        {/* Add more questions as needed */}
        <button type="submit">Submit</button>
      </form>
      {results && (
        <div>
          <h2>Results</h2>
          {Object.keys(results).map((key) => (
            <p key={key}>{key}: {results[key]}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Assessment;
