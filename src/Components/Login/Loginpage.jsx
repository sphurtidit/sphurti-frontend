import React from "react";
import logpage from'./Loginpage.module.css';
import { useNavigate } from "react-router-dom";
import BGImage from"../../assets/loginbg.jpg";
import icon from"../../assets/iconsph.png";
import Sphurti from "../../assets/sphurti.png";
import Naac from "../../assets/naac.png";
import Dit from "../../assets/DIT.png";

function Loginpage() {
    const navigate = useNavigate();
  
    return (
        <>
      <div className={logpage.loginContainer}>
        <div className={logpage.loginBox}>
        <img src={Sphurti} alt="Sphurti Logo" className={logpage.logo1} />
                    <img src={Naac} alt="Naac Logo" className={logpage.logo2} />
                    <img src={Dit} alt="Dit Logo" className={logpage.logo3} />
                

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