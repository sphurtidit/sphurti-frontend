import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./coordinators.css";
import Navbar from "../../Components/Navbar/Navbar";

const CoordinatorsPage = () => {
  
  return (
    <div className="registration-containe1r">
      <Navbar/>
      <div className="surfing">
        <h1>STUDENT COORDINATORS</h1>
       
    
        <h2>Web Design And Social Media Team</h2>
        <div className="branchname">
            <div><li>Abdullah Aziz</li></div>
            <div>BTIT 3rd year</div>
        </div>
      
        <div className="branchname">
            <div><li>Tanya Yadav</li></div>
            <div>BTCSE 3rd year</div>
        </div>
       

        <h2>Logistic And Support Team</h2>
        <div className="branchname">
            <div><li>Sparsh Sudhar</li></div>
            <div>BTCSE 3rd year</div>
        </div>
        <div className="branchname">
            <div><li>Sambhavi Shekhar</li></div>
            <div>B.Pharm 3rd year</div>
        </div>
        <h2>Hospitality</h2>
        <div className="branchname">
            <div><li>Sambhav Verma</li></div>
            <div>BTCSE 3rd year</div>
        </div>
        <div className="branchname">
            <div><li>Saurabh Kumar Singh</li></div>
            <div>B.Pharm 3rd year</div>
        </div>
        <h2>Public Realtion</h2>
        <div className="branchname">
            <div><li>Sugandha Saini</li></div>
            <div>BTCSE 3rd year</div>
        </div>
        <div className="branchname">
            <div><li>Anushka Joshi</li></div>
            <div>BTCSE 3rd year</div>
        </div>
        <h2>Design Team</h2>
        <div className="branchname">
            <div><li>Abhinav Agnihotri</li></div>
            <div>BDes UX 3rd year</div>
        </div>
        <h2>Sponsorship Team</h2>
        <div className="branchname">
            <div><li>Jatin Gulia</li></div>
            <div>BTCSE 3rd year</div>
        </div>
        <div className="branchname">
            <div><li>Piyush Borney</li></div>
            <div>BTCSE 3rd year</div>
        </div>

        <h2>Photography Team</h2>
        <div className="branchname">
            <div><li>Abheer Pathak</li></div>
            <div>B.Des VGA 3rd year</div>
        </div>
      
    
      </div>
    </div>
  );
};

export default CoordinatorsPage;
