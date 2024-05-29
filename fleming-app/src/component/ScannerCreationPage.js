import React, { useState } from 'react';
import logo from '../assests/logo.png';
import './componentStyles/LevelsPage.css'; // Import CSS file for styling

function ScannerCreationPage() {
    const [formData, setFormData] = useState({
        inputField: '',
        details: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Extract user-entered data from the form fields
        const { inputField, details } = formData;
        // Handle form submission, you can send formData to server or do any other processing here
        console.log("Input Field:", inputField);
        console.log("Details:", details);
    };

    const savedName = sessionStorage.getItem('userName');

    return (
        <>
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
                    <span className='home-level'> Hello </span>
                    <span style={{ color: 'white', fontWeight: 'bold' }}>{savedName}</span>
                </div>
            </div>
            <div className="levels-page mt-5">
                <div className="container question-container mt-5">
                    <form onSubmit={handleSubmit} className="form">
                        <div className="form-group">
                            <label htmlFor="inputField">Input Field:Question</label>
                            <input
                                type="text"
                                id="inputField"
                                name="inputField"
                                value={formData.inputField}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="details">Details:</label>
                            <textarea
                                id="details"
                                name="details"
                                value={formData.details}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="form-group text-center">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="footer">
                <h3 className="footer-heading">Copy@ 2024 fleming.ca, All Right Reserved</h3>
            </div>
        </>
    );
}

export default ScannerCreationPage;
