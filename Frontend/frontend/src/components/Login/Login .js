import axios from 'axios';
import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = JSON.stringify({ email, password });

    axios
      .post(`http://localhost:5000/login`, data, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then(() => {
        console.log('logged in successfully');
      });
  };
  return (
    <div className="Login">
      <h1 className="text-center">Log in</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <div className="d-grid">
        <button>Log in</button>
        
        <span>Don't have an account?<a href="register">Register</a></span>
        </div>
      </form>
    </div>
  );
}
export default Login;
