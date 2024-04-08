import React, { useState }  from 'react';
import './componentStyles/ForgetPasswoed.css';
import logo from '../assests/logo.png';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const handleEmailChange = (e) => {
        setEmail(e.target.value); 
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('email:', email);
      };
    
    return (
        <div className="wrapper">
            <div className="background-image"></div>
            <div className="gradient"></div>
            <form onSubmit={handleSubmit} className="register-form">
                <img src={logo} alt="logo" />
                <h2 style={{ color: 'white' }}>Login To Your Account</h2>
                <div className="form-group">
                    <input
                        type="text"
                        id="email"
                        placeholder='Email'
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <button className="btn btn-primary btn-lg" type="submit"><a href="/otp">Submit</a></button>
            </form>
        </div>
    );
};

export default ForgotPasswordPage;
