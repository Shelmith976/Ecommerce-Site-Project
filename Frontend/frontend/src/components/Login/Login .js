import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
        console.log('logged in succesfully');
      });
  };
  return (
    <div className="Login">
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          required
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          required
        />
        <button>Log in</button>
      </form>
    </div>
  );
}
export default Login;
