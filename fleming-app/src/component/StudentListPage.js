import React, { useState } from 'react';
import logo from '../assests/logo.png';
import './componentStyles/LevelsPage.css'; // Import CSS file for styling

function StudentListPage() {
    const [selectedCollege, setSelectedCollege] = useState(""); // State variable for selected college

    const handleCollegeChange = (e) => {
        setSelectedCollege(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Extract user-entered data from the form fields
    };

    const savedName = sessionStorage.getItem('userName');

    // Sample user data with additional fields for status and level
    const users = [
        { name: "John Doe", image: "path/to/image.jpg", time: "9:00 AM", status: "In Progress", level: 5 },
        { name: "Jane Smith", image: "path/to/image.jpg", time: "10:30 AM", status: "Completed", level: 8 },
        // Add more user data as needed
    ];

    return (
        <>
            <div className="header">
                <div className="logo-section">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="home-level">
                        <span>Home</span> |
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
                    {/* Dropdown for college selection */}
                    <select
                        value={selectedCollege}
                        onChange={handleCollegeChange}
                        className="custom-dropdown" // Apply custom dropdown style
                    >
                        <option value="">Select College</option>
                        <option value="college1">College 1</option>
                        <option value="college2">College 2</option>
                        {/* Add more colleges as needed */}
                    </select>
                    {/* User table */}
                    <table className="custom-table"> {/* Apply custom table style */}
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Time</th>
                                <th>Status</th> {/* New field */}
                                <th>Level</th> {/* New field */}
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td><img src={user.image} alt={user.name} /></td>
                                    <td>{user.time}</td>
                                    <td>{user.status}</td> {/* Display status */}
                                    <td>{user.level}</td> {/* Display level */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="footer">
                <h3 className="footer-heading">Copy@ 2024 fleming.ca, All Right Reserved</h3>
            </div>
        </>
    );
}

export default StudentListPage;
