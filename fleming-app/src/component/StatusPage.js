import React from 'react';
import rectangleImage from '../assests/Rectangle 11.png'
import './componentStyles/LevelsPage.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Substract from '../assests/Subtract.png';
import frame from '../assests/Frame.png';
import frametrophy from '../assests/Frame2.png';
import logo from '../assests/logo.png';

const StatusPage = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/levels');
  }
  return (
    <>
      <div className="header" style={{padding: '30px'}}>
        <div className="logo-section">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="task-header">
          <span className='home-level'> Hello </span>
          <span style={{color: 'white', fontWeight: 'bold'}}> Geemol Baby</span>
        </div>
      </div>
      <div className="footer">
        <h3 className="footer-heading">Copy@ 2024 fleming.ca, All Right Reserved</h3>
      </div>
    </>
  );
};

export default StatusPage;
