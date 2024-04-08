import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './componentStyles/LoginPage.css';
import logo from '../assests/logo.png';
import './componentStyles/RegisterPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="wrapper">
    <div className="background-image"></div>
    <div className="gradient"></div>
      <form onSubmit={handleSubmit} className="register-form">
          <h2 style={{ color: 'white' }}>Login To Your Account</h2>
        <img src={logo} alt="logo"  />
        <div className="form-group">
          <input
            type="text"
            id="email"
            placeholder='Email'
            value={email}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          {/* <img src="/path/to/password-icon.png" alt="Password Icon" className="input-icon" /> */}
          <input
            type="password"
            id="password"
            placeholder='Password'
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button className="btn btn-primary btn-lg" type="submit"><a href="/home">Login</a></button>
        <div className="additional-links">
          <span className="mb-5" style={{color:'white'}}>Don't have an account?<a href="/register">Register</a></span> <br></br>
          <a href="/forgot-password">Forgotten Password?</a>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
