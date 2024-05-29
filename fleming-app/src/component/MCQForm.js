import React, { useState } from 'react';
import logo from '../assests/logo.png';
import './componentStyles/LevelsPage.css'; // Import CSS file for styling

function MCQForm() {
    const [formData, setFormData] = useState({
        question: '',
        options: ['', '', '', ''],
        correctAnswer: '' // Add field for correct answer
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleOptionChange = (index, value) => {
        const updatedOptions = [...formData.options];
        updatedOptions[index] = value;
        setFormData({
            ...formData,
            options: updatedOptions
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Extract user-entered data from the form fields
        const { question, options, correctAnswer } = formData;

        // Handle form submission, you can send formData to server or do any other processing here
        console.log("Question:", question);
        console.log("Options:", options);
        console.log("Correct Answer:", correctAnswer);
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
                <div className="container oval-container mt-5">
                    <h2>Multiple Choice Question Form</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="question">Question:</label>
                            <input
                                type="text"
                                id="question"
                                name="question"
                                value={formData.question}
                                onChange={handleChange}
                                required />
                        </div>
                        <div>
                            {formData.options.map((option, index) => (
                                <div key={index}>
                                    <label htmlFor={`option${index + 1}`}>Option {index + 1}:</label>
                                    <input
                                        type="text"
                                        id={`option${index + 1}`}
                                        name={`option${index + 1}`}
                                        value={option}
                                        onChange={(e) => handleOptionChange(index, e.target.value)}
                                        required />
                                </div>
                            ))}
                        </div>
                        <div>
                            <label htmlFor="correctAnswer">Correct Answer:</label>
                            <select
                                id="correctAnswer"
                                name="correctAnswer"
                                value={formData.correctAnswer}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select correct answer</option>
                                {formData.options.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>
                            <button type="submit">Submit</button>
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

export default MCQForm;
