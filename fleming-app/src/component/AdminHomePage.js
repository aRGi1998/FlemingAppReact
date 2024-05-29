import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './componentStyles/LevelsPage.css'; // Import CSS file for styling
import lock from '../assests/lock.png';
import logo from '../assests/logo.png';
import axios from 'axios';

const AdminHomePage = () => {
    const navigate = useNavigate();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        getGameData()
        const isAdminLocalStorage = localStorage.getItem('isAdmin');
        if (isAdminLocalStorage === 'true') {
            setIsAdmin(true);
        }
    }, []);

    const getGameData = () => {
        const token = sessionStorage.getItem('accessToken');
        if (!token) {
            console.error('Access token not found in local storage');
            return;
        }

        axios.get('https://api-flrming.dhoomaworksbench.site/#/api/api_game_list', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                console.log(response, 'respoms')
            })

    };

    const navigateToMcq = (buttonId) => {
        navigate('/mcq', { state: { buttonId } }); // Pass buttonId in state object
    };
    const navigateToFileUpload = (buttonId) => {
        navigate('/fuform', { state: { buttonId } }); // Pass buttonId in state object

    };
    const navigateToQRScanner = (buttonId) => {
        navigate('/scanner-creation', { state: { buttonId } }); // Pass buttonId in state object
    };
    return (
        <>
            {/* Header Section Start Here! */}
            <div className="header">
                <div className="logo-section">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="home-level">
                        <span> <a style={{ color: 'white' }} href="/student-list">Student List</a></span> |
                        <span className="level-heading">Logout</span>
                    </div>
                </div>
                <div className="task-header">
                    <h2>TASK CREATION</h2>
                </div>
            </div>
            {/* Level Section Start Here! */}
            <div className="levels-page mt-5">
                <div className="container oval-container mt-5">
                    <div id="MCQ" className="oval-button mb-3" style={{ backgroundColor: 'rgb(19, 223, 91)' }} onClick={() => navigateToMcq('MCQ')}>
                        <div className="left-side">*</div>
                        <span>Multiple Choice Question</span>
                        <div className="right-side">
                            <img src={lock} alt="Image" style={{ width: '20px', height: '20px', color: 'white' }} />
                        </div>
                    </div>
                    <div id="FU" className="oval-button mb-3" style={{ backgroundColor: 'rgb(19, 223, 148)' }} onClick={() => navigateToFileUpload('FU')}>
                        <div className="left-side">*</div>
                        <span>File Upload</span>
                        <div className="right-side">
                            <img src={lock} alt="Image" style={{ width: '20px', height: '20px', color: 'white' }} />
                        </div>
                    </div>
                    <div id="QRS" className="oval-button mb-3" style={{ backgroundColor: 'rgb(11, 156, 103)' }} onClick={() => navigateToQRScanner('QRS')}>
                        <div className="left-side">*</div>
                        <span>QR Scanner</span>
                        <div className="right-side">
                            <img src={lock} alt="Image" style={{ width: '20px', height: '20px', color: 'white' }} />
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer Section Start Here! */}
            <div className="footer">
                <h3 className="footer-heading">Copy@ 2024 fleming.ca, All Right Reserved</h3>
            </div>
        </>
    );
};

export default AdminHomePage;