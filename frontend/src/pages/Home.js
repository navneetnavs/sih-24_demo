// src/pages/Home.js
import React from 'react';
import './Home.css'; // For any custom styling

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to the Comprehensive Employment Platform</h1>
        <p>Your gateway to personalized job matching and skill development.</p>
      </header>
      <section className="home-features">
        <div className="feature">
          <h2>Personalized Job Matching</h2>
          <p>Find jobs that fit your skills and preferences.</p>
        </div>
        <div className="feature">
          <h2>Skill Gap Analysis</h2>
          <p>Identify your skill gaps and get recommendations to improve.</p>
        </div>
        <div className="feature">
          <h2>Adaptive Learning Pathways</h2>
          <p>Engage with personalized learning resources and pathways.</p>
        </div>
      </section>
      <footer className="home-footer">
        <p>&copy; 2024 Comprehensive Employment Platform</p>
      </footer>
    </div>
  );
};

export default Home;
