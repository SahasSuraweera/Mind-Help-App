import React, { useState } from 'react';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dummyUser = {
      username: form.username || 'guest',
      role: 'user',
      staffId: 'TEMP001'
    };

    sessionStorage.setItem('username', dummyUser.username);
    sessionStorage.setItem('role', dummyUser.role);
    sessionStorage.setItem('staffId', dummyUser.staffId);

    navigate('/home');
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <img src="/logo.webp" alt="MindHelp Logo" className="login-logo" />

        <h2>Welcome Back</h2>
        <p className="login-subtitle">
          Sign in to manage counselling sessions securely
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="login-footer">
          MindHelp Counselling Management System
        </p>
      </div>
    </div>
  );
}
