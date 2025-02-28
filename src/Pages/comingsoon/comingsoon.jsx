import React from 'react';
import './comingsoon.css'; 
import soon from "../../assets/soon.png"
import Nav from '../../Components/Navbar/nav';


const ComingSoon = ({ message }) => {
  return (
      
    <div className="main-div-comingsoon">
      <Nav/>
       <div className="coming-soon-container">
        <img className='img' src={soon} alt="" />
    </div>

    </div>
   
  );
};

export default ComingSoon;
