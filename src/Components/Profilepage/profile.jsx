import React, { useState, useEffect } from "react";
import profile from "./profile.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Navbar/nav";

function ProfilePage() {
  const [userDetails, setUserDetails] = useState(null); // State to store user details
  const [error, setError] = useState(null); // State to store any error
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "https://sphurti-backend.onrender.com/api/user/verify-user",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          }
        );

        // Save the user data in state
        setUserDetails(response.data.data.currentUser);

        // Show a success toast
        toast.success("Logged in successfully!");
      } catch (err) {
        console.error("Error fetching user data:", err);

        // Set error message and show an error toast
        const errorMessage =
          err.response?.data?.message || "Failed to fetch user details.";
        setError(errorMessage);
        toast.error(errorMessage);
      }
    };

    fetchUser();
  }, []);

  if (error) {
    return <div className={profile.error}>{error}</div>;
  }

  // Display a loading state while fetching data
  if (!userDetails) {
    return <div className={profile.loading}>Loading...</div>;
  }

  return (
         <>
         <Navbar />
      <div className={profile.ProfilePage}>
      <ToastContainer position="top-right" autoClose={3000} />
<div className={profile.mainbox}>
      <div className={profile.info}>
      <div className={profile.daba}>
  <div className={profile.image}>
  </div>
  <button
    className={profile.btn1}
    onClick={() => handleNavigation("/")}
  >
    Payments
  </button>
  <button
    className={profile.btn}
    onClick={() => {
      localStorage.removeItem("authToken");
      handleNavigation("/Loginpage");
      toast.info("Logged out successfully.");
    }}
  >
   Login 
  </button>
  
</div>
        <div className={profile.mainheading}>
          <div className={profile.bgplate}>
            <h2 className={profile.text}> Name: <span className={profile.dox}>{userDetails.name}</span></h2>
          </div>
          <div className={profile.bgplate}>
            <h2 className={profile.text}>Phone No.:<span className={profile.dox}> {userDetails.phone_no}</span></h2>
          </div>
          <div className={profile.bgplate}>
            <h2 className={profile.text}>Email Id:<span className={profile.dox}> {userDetails.email}</span></h2>
          </div>
          <div className={profile.bgplate}>
            <h2 className={profile.text}>
              College: <span className={profile.dox}>{userDetails.college_name}</span>
            </h2>
          </div>
          <div className={profile.bgplate}>
            <h2 className={profile.text}>
              College ID: <span className={profile.dox}>{userDetails.college_id}</span>
            </h2>
          </div>
          <div className={profile.bgplate}>
            <h2 className={profile.text}>Branch: <span className={profile.dox}>{userDetails.branch}</span></h2>
          </div>
          <div className={profile.bgplate}>
            <h2 className={profile.text}>Year:<span className={profile.dox}> {userDetails.year}</span></h2>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className={profile.scroller}>
        <h1 className={profile.register}>Registered Events:</h1>
        <div className={profile.registered}>
          {/* Add your events logic here */}
          <img className={profile.events}
            src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg"
          
            alt="Event"
          ></img>
        </div>
        <br />
      </div>
      </div>
    </div>
    </>
  );
}

export default ProfilePage;
