import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';
import image from './amazon.jpg';
import { Link, useNavigate } from "react-router-dom";

const OceanLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', loginData);
      localStorage.setItem('token', response.data.token); // Store token in local storage
     console.log(response.data.token);
      if(email === 'admin@gmail.com')
      {
        navigate('/abcd');
      }
      else
      {
        navigate('/abc');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className='reg'>
      <div className="oce-base-container">
      <img src={image} alt="Login" className="oce" style={{ width: '35%', height: '100px', objectFit: 'cover', borderRadius: '50%', display: 'block', margin: '0 auto 20px' }} />
<br/>
        <form className="ocean-login-form" onSubmit={handleSubmit}>
        
          <label htmlFor="email">Email</label>
          <input
            type="text"
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
          <button type="submit">Login</button>
        </form>
        <p className="ocean-login-link1">Don't have an account? <Link to="/reg">Register here</Link></p> {/* Link remains unchanged */}
      </div>
    </div>
  );
};

export default OceanLogin;