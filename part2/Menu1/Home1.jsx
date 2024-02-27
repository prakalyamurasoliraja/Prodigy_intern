import React from 'react';
import { Link } from 'react-router-dom';

import './Home1.css';

const Home1 = () => (
  <header className="home1-header">
    <div className="home1-header-content">
      <h1 className="home1-header-title">
        Gift Good Vibes
        <br/>
        <span className="home1-header-subtitle">
          Holistic Wellness Gifts and Care Packages
        </span>
      </h1>
      <Link to="/coll" type="button" className="home1-header-button">
        VIEW ALL COLLECTIONS
      </Link>
    </div>
  </header>
);

export default Home1;
