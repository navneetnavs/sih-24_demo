// src/pages/Login.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { AuthContext } from '../context/Authcontext'; // Ensure correct path

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(AuthContext); // Changed to setUser for consistency
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token); // Save token to localStorage
      setUser(res.data.user); // Update user context
      navigate('/profile'); // Navigate to profile page
    } catch (err) {
      console.error('Login failed:', err.response?.data || err.message);
      // Optionally handle error (show message to user, etc.)
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
