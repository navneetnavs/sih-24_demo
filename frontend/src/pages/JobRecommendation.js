// src/pages/JobRecommendations.js
import React, { useState, useEffect } from 'react';
import api from '../services/api';

const JobRecommendations = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await api.get('/job-recommendation');
        setJobs(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <h1>Job Recommendations</h1>
      {jobs.length > 0 ? (
        jobs.map((job, index) => (
          <div key={index}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
          </div>
        ))
      ) : (
        <p>No recommendations available.</p>
      )}
    </div>
  );
};

export default JobRecommendations;
