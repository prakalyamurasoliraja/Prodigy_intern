import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './adminpro.css';
import pi2 from './pro.jpg';

function AdminProfile() {
    const initialProfile = {
        profilePicture: pi2,
        name: 'John Doe',
        email: 'johndoe@example.com',
        contactNumber: '+1234567890',
    };

    // Load profile data from localStorage on component mount
    const [profile, setProfile] = useState(
        JSON.parse(localStorage.getItem('profile')) || initialProfile
    );

    const [editMode, setEditMode] = useState(false);
    const [urlInput, setUrlInput] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const navigate=useNavigate();

    useEffect(() => {
        fetchProfileData(); // Fetch profile data when the component mounts
    }, []);

    useEffect(() => {
        // Save profile data to localStorage whenever it changes
        localStorage.setItem('profile', JSON.stringify(profile));
    }, [profile]);

    const fetchProfileData = () => {
        axios.get('http://localhost:8081/admin-profiles/')
            .then(response => {
                setProfile(response.data);
            })
            .catch(error => {
                console.error('Error fetching profile data:', error);
            });
    };

    const handleUrlInputChange = (e) => {
        setUrlInput(e.target.value);
    };

    const handleProfileDetailChange = (field, value) => {
        setProfile({
            ...profile,
            [field]: value
        });
    };
    const handleSaveChanges = () => {
        axios.post('http://localhost:8081/admin-profiles/', profile)
            .then(response => {
                setShowPopup(true);
                navigate("/Aprofile");
            })
            .catch(error => {
                console.error('Error saving profile changes:', error);
            })
            .finally(() => {
                setEditMode(false); // This will always be executed, regardless of success or error
            });
    };
    
    
    return (
        <div className='bspic'>
        <div className="admin-profile">
        {showPopup && (
                <div className="popup-message">
                    Profile updated successfully!
                </div>
            )}
            <div className="left-section">
                <div className="profile-picture">
                    <img src={profile.profilePicture} alt="Profile" />
                    {editMode && (
                        <input
                            type="text"
                            placeholder="Enter URL for Profile Picture"
                            value={urlInput}
                            onChange={handleUrlInputChange}
                            />
                    )}
                </div>
                <div className="basic-details">
                <div className="editable-fields">
                <h2>
                      
                {editMode ? (
                    <input
                                    type="text"
                                    value={profile.name}
                                    onChange={(e) => handleProfileDetailChange('name', e.target.value)}
                                    />
                            ) : (
                                profile.name
                                )}
            
                                </h2>
                        <br/>
                        <p>
                        <h3><strong>Email:</strong></h3>
                        <div className='oui'>
                        {editMode ? (
                                <input
                                    type="text"
                                    value={profile.email}
                                    onChange={(e) => handleProfileDetailChange('email', e.target.value)}
                                    />
                            ) : (
                                profile.email
                            )}
                            </div>
                        </p>
                        <br/>
                        <p>
                        <h3> <strong>Contact Number:</strong></h3>
                        <div className='oui'>
                        {editMode ? (
                            <input
                            type="text"
                            value={profile.contactNumber}
                            onChange={(e) => handleProfileDetailChange('contactNumber', e.target.value)}
                            />
                            ) : (
                                profile.contactNumber
                                )}
                                </div>
                        </p>
                        </div>
                        </div>
                        </div>
                        {!editMode && (
                <button onClick={() => setEditMode(true)}>Edit Profile</button>
            )}
            {editMode && (
                <button onClick={handleSaveChanges}>Save Changes</button>
            )}
            </div>
            </div>
    );
}

export default AdminProfile;