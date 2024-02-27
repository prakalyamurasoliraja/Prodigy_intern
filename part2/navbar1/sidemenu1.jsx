import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../nav1.css'; // You can define your styles in Sidebar.css

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="toggle-btn" onClick={handleToggle}>
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`} ></i>
      </div>
      <br/><br/>
      <ul className="side">
        <li>
          <Link to="/abc">Home
            <i className="fas fa-user"></i>
          </Link>
        </li>
        <li>
          <Link to="/pro">Profile
            <i className="fas fa-gift"></i> 
          </Link>
        </li>
        <li>
          <Link to="/coll">Collections
            <i className="fas fa-shopping-bag"></i>
          </Link>
        </li>
        <li>
          <Link to="/theme">Theme
            <i className="fas fa-credit-card"></i> 
          </Link>
        </li>
        <li>
          <Link to="/create">Place Order
            <i className="fas fa-credit-card"></i> 
          </Link>
        </li>
        <li>
          <Link to="/homep">Payment
            <i className="fas fa-credit-card"></i> 
          </Link>
        </li>
        <li>
          <Link to="/themecopy">New Coll
            <i className="fas fa-credit-card"></i> 
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
