import axios from 'axios';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = JSON.stringify({ email, password });

    axios.post(`http://localhost:5000/login`, data, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then(() => {
        console.log('logged in successfully');
      });
  };
  return (
    <div className="Login text-center h-100">
      <img className="mb-3 fast-service-logo" src="https://i.pinimg.com/564x/d4/0c/2a/d40c2a4b7250497223673f592349ac05.jpg" alt="Fast Service logo"/>
      <h1 className="text-center fw-normal">Log in</h1>
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
        <Link to={"/Home"}><button>Log in</button></Link>
        
        <span>Don't have an account?<a href="register">Register</a></span>
        </div>
      </form>
    </div>
  );
}
export default Login;
