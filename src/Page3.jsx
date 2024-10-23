import React from 'react';
import './Page3.css';
import { Link } from 'react-router-dom';

export default function Page3() {
  return (
    <div className="achievements-container">
      <h1 className="achievements-title">Achievements</h1>
      <div className="achievement-cards">
        <div className="card">
          <img src="./trophy.jpg" alt="Achievement 1" />
        </div>
        <div className="card">
          <img src="./trophy2.jpg" alt="Achievement 2" />
        </div>
        <div className="card">
          <img src="./trophy3.jpg" alt="Achievement 3" />
        </div>
        <div className="card">
          <img src="./slide3.jpeg" alt="Achievement 4" />
        </div>
      </div>
      <Link to="/gallery">
        <button className="b00tton">See More</button>
      </Link>
    </div>
  );
}
