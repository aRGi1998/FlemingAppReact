import React, { useState } from 'react';
import './componentStyles/RegisterPage.css';
import logo from '../assests/logo.png';

function RegisterPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [campus, setCampus] = useState('');
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleCampusChange = (e) => {
        setCampus(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Email:', email);
        // console.log('Password:', password);
        // console.log('Confirm Password:', confirmPassword);
    };

    return (
        <div className="wrapper">
            <div className="background-image"></div>
            <div className="gradient"></div>
            <form onSubmit={handleSubmit} className="register-form">
                <img className="register-logo" src={logo} alt="logo" />
                <div className="form-group">
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                        // className="input-with-icon"
                        placeholder="Enter Your Username"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        // className="input-with-icon"
                        placeholder="Email"
                    />
                </div>
                <div className="form-group">
                    {/* <img src="/path/to/password-icon.png" alt="Password Icon" className="input-icon" /> */}
                    <input
                        type="text"
                        id="phoneNumber"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={handlePhoneChange}
                    />
                </div>
                <div className="form-group">
                    {/* <img src="/path/to/password-icon.png" alt="Password Icon" className="input-icon" /> */}
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div className="form-group" >
                    {/* <img src="/path/to/password-icon.png" alt="Password Icon" className="input-icon" /> */}
                    <input
                        style={{ backgroundColor: 'red' }}
                        type="text"
                        id="campus"
                        placeholder="Campus"
                        value={campus}
                        onChange={handleCampusChange}
                    />
                </div>
                <button className="btn btn-primary btn-lg" type="submit">SUBMIT</button>
            </form>
        </div>
    );
}

export default RegisterPage;
