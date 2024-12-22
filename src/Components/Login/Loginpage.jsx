import React from "react";
import logpage from'./Loginpage.module.css';
import { useNavigate } from "react-router-dom";

function Loginpage() {
    const navigate = useNavigate();
  
    return (
        <>
      <div className={logpage.loginContainer}>
        <div className={logpage.loginBox}>
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



