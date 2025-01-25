import React from "react";
import logpage from'./Loginpage.module.css';
import { useNavigate } from "react-router-dom";
import Sphurti from "../../assets/sphurti.png";
import Naac from "../../assets/naac.png";
import Dit from "../../assets/DIT.png";
import BGImage from"../../assets/loginbg.jpg";
import icon from"../../assets/iconsph.png";

function Loginpage() {
    const navigate = useNavigate();
  
    return (
        <>
      <div className={logpage.loginContainer}>
        <div className={logpage.loginBox}>
           <img src={Sphurti} alt="" className="logo_1"/>
                  <img src={Naac} alt="" className="logo_2"/>
                  <img src={Dit} alt="" className="logo_3"/> 
                  <img src={icon} alt="" className="icon"/>
                

                  <div 
    className={logpage.bgimage}
    style={{ backgroundImage: `url(${BGImage})` }} // Corrected line
></div>


            <h1 ><p >Welcome to </p>
                      Sphurti</h1>
            <form>
                <div className={logpage.formGroup}>
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="Enter your username" required/>
                </div>
                <div className={logpage.formGroup}>
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required/>
                </div>
                <a href="#"><p className={logpage.forpass}>Forgot Password</p></a>
                <button type="submit" className={logpage.loginBtn}>Login</button>
                <p className={logpage.signupText}>Don't have an account? <a href="#">Sign Up</a></p>
                
            </form>
        </div>
    </div>
        
      </>
    )
}

export default Loginpage;