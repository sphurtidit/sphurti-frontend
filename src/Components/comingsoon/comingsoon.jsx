import React from 'react';
import './comingsoon.css'; 
import soon from "../../assets/soon.png"
import Navbar from '../Navbar/Navbar';


const ComingSoon = ({ message }) => {
  return (
      
    <div className="main-div-comingsoon">
      <Navbar/>
       <div className="coming-soon-container">
        <img className='img' src={soon} alt="" />
    </div>

    </div>
   
  );
};

export default ComingSoon;
