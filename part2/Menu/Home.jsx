import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

function Home() {
  // You can use the useState hook if needed

  return (
    <header className="headeri">
      <div className="header-contenti">
        <h1 className="header-titlei">
          Gift Good Vibes
          <br />
          <span className="header-subtitlei">
            Holistic Wellness Gifts and Care Packages
          </span>
        </h1>
        <Link to="/copy" className="header-buttoni">
          VIEW ALL ORDERS
        </Link>
      </div>
    </header>
  );
}

export default Home;
