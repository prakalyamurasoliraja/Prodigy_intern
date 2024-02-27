import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../nav.css'; // You can define your styles in Sidebar.css

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar55 ${isOpen ? 'open55' : ''}`}>
      <div className="toggle-btn55" onClick={handleToggle}>
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`} ></i>
      </div>
      <br/><br/>
      <ul className="side55">
        <li>
          <Link to="/abcd">Home
            <i className="fas fa-user"></i>
          </Link>
        </li>
        <li>
          <Link to="/copygif">Orders
            <i className="fas fa-shopping-bag"></i>
          </Link>
        </li>
        <li>
          <Link to="/themecreate">Add Theme
            <i className="fas fa-shopping-bag"></i>
          </Link>
        </li>
        <li>
          <Link to="/copyp">Status
            <i className="fas fa-shopping-bag"></i>
          </Link>
        </li>
        <li>
          <Link to="/">Logout
            <i className="fas fa-sign-out-alt"></i>
          </Link>
        </li>
        <div className={`remain ${isOpen ? 'remain-open' : ''}`}>
          <br></br>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
