import React, { useState } from "react";
import logpage from "./Loginpage.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { handleSuccess, handleError } from "../../utils"; // Import utility functions
import { ToastContainer } from "react-toastify"; // Toast container for notifications
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

function Loginpage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page
    setError(""); // Clear any previous errors

    try {
      const response = await axios.post(
        "https://sphurti-backend.onrender.com/api/user/login",
        { email, password }
      );

      // Extract data from the response
      const { token, user } = response.data.data;

      // Save token and user details in localStorage
      localStorage.setItem("authToken", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Show success toast
      handleSuccess("Login successful!");

      // Redirect to the profile page
      navigate("/");
    } catch (err) {
      console.error("Login failed:", err);
      const errorMessage =
        err.response?.data?.message || "Something went wrong. Please try again.";

      // Show error toast
      handleError(errorMessage);

      setError(errorMessage);
    }
  };

  return (
    <>
      <div className={logpage.loginContainer}>
        <div className={logpage.loginBox}>
          <h1>
            <p>Welcome to </p>
            Sphurti
          </h1>
          <form onSubmit={handleLogin}>
            <div className={logpage.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={logpage.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <a href="#">
              <p className={logpage.forpass}>Forgot Password</p>
            </a>
            <button type="submit" className={logpage.loginBtn}>
              Login
            </button>
            <p className={logpage.signupText}>
              Don't have an account?{" "}
              <span onClick={() => navigate("/Signinpage")}>Sign Up</span>
            </p>
          </form>
        </div>
      </div>
      {/* ToastContainer to render the toast notifications */}
      <ToastContainer />
    </>
  );
}

export default Loginpage;
