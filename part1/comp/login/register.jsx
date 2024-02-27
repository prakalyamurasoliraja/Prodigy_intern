import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';
import image from './amazon.jpg';
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const registrationData = {
      name: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/register', registrationData);

      if (response.status === 200) {
        console.log('Registration successful');
      } else {
        console.error('Registration failed:', response.data.message);
        setError(response.data.message);
      }
    } catch (error) {
      console.error('Error during registration:', error.message);
      setError('Network error. Please try again.');
    }
  };

  return (
    <div className='reg'>
      <div className="ocean-base-container"> {/* Changed class name */}
      <img src={image} alt="Login" className="oce" style={{ width: '35%', height: '100px', objectFit: 'cover', borderRadius: '50%', display: 'block', margin: '0 auto 20px' }} />

        <form className="ocean-register-form" onSubmit={handleSubmit}> {/* Changed class name */}
          <label htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <br />

          {error && <p className="ocean-error-message">{error}</p>} {/* Changed class name */}

          <button type="submit">Register</button>
          <p className="ocean-login-link"> {/* Changed class name */}
            Already registered? <Link to="/">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;