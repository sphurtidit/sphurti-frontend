import React from 'react';
import './comingsoon.css'; 
import soon from "../../assets/soon.svg"


const ComingSoon = ({ message }) => {
  return (
    <div className="coming-soon-container">
        <img className='img' src={soon} alt="" />
    </div>
  );
};

export default ComingSoon;
