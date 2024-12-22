import React from "react";
import signpage from'./Signup.module.css';
import { useNavigate } from "react-router-dom";

function Signinpage() {
    const navigate = useNavigate();
  
    return (
        <>
         <div className={signpage.Container}>
                <div className={signpage.Box}>
                    <h1 ><p >Welcome to </p>
                      Sphurti</h1>
                    <form>
                        <div className={signpage.formGroup}>
                            
                            <input type="text" id="username" name="username" placeholder="Enter your username" required/>
                        </div>
                        <div className={signpage.formGroup}>
                            
                            <input type="email"  name="email" placeholder="Enter your E-mail" required/>
                            <button type="submit" className={signpage.signBtn}>Verify </button>
                        </div>
                       
                        <div className={signpage.formGroup}>
                           
                            <input type="text"  name="Cname" placeholder="Enter your College" required/>
                        </div>
                        <div className={signpage.formGroup}>
                            
                            
                            <input type="text" name="id" placeholder="Enter your college ID" required/>
                        </div>
                        <div className={signpage.branch}>
                        <div className={signpage.formGroup}>
                            
                            <input type="text" name="branch" placeholder="Branch" required/>
                        </div>
                        <div className={signpage.formGroup}>
                            
                            <input type="number" name="number" placeholder="Year" required/>
                        </div>
                        </div>
                        <div className={signpage.formGroup}>
                           
                            <input type="password"  name="password" placeholder="Set your password" required/>
                        </div>
                        
                        <button type="submit" className={signpage.signinBtn}>Sign in</button>
                        
                    </form>
                </div>
            </div>
                
      </>
    )
}

export default Signinpage;



