// src/pages/SkillGapAnalysis.js
import React, { useState, useEffect } from 'react';
import api from '../services/api';

const SkillGapAnalysis = () => {
  const [skillGaps, setSkillGaps] = useState([]);

  useEffect(() => {
    const fetchSkillGaps = async () => {
      try {
        const res = await api.get('/skill-gap');
        setSkillGaps(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };

    fetchSkillGaps();
  }, []);

  return (
    <div>
      <h1>Skill Gap Analysis</h1>
      {skillGaps.length > 0 ? (
        skillGaps.map((gap, index) => (
          <div key={index}>
            <h3>Job: {gap.jobTitle}</h3>
            <p>Skill Gap: {gap.skillGap.join(', ')}</p>
          </div>
        ))
      ) : (
        <p>No skill gaps identified.</p>
      )}
    </div>
  );
};

export default SkillGapAnalysis;
