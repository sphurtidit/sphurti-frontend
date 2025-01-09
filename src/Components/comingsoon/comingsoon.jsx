import React from 'react';
import './comingsoon.css'; 

const ComingSoon = ({ message }) => {
  return (
    <div className="coming-soon-container">
      <div className="coming-soon-content">
        <h1 className="coming-soon-title">{message || "Coming Soon!"}</h1>
        <p className="coming-soon-subtitle">We’re working hard to bring you this feature. Stay tuned!</p>
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default ComingSoon;
