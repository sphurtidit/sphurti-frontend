import React, { useState, useEffect } from "react";
import profile from "./profile.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import useUserStore from '../../store/userStore';

function ProfilePage() {
  const { user, fetchUser, logout } = useUserStore();
  //const [userDetails, setUserDetails] = useState(null); // State to store user details
  // const [error, setError] = useState(null); // State to store any error
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  // if (error) {
  //   return <div className={profile.error}>{error}</div>;
  // }

  // Display a loading state while fetching data
  if (!user) {
    return <div className={profile.loading}>Loading...</div>;
  }

  return (
    <div className={profile.ProfilePage}>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className={profile.info}>
        <div>
          <div className={profile.image}>
            <h3 className={profile.heading}>Profile photo</h3>
          </div>
          <button
            className="modal-button"
            onClick={() => {
              logout();
              handleNavigation("/");
              toast.info("Logged out successfully.");
            }}
          >
            Logout
          </button>
          <button
            className="modal-button"
            onClick={() => handleNavigation("/comingsoon")}
          >
            Payments
          </button>
        </div>
        <div className={profile.mainheading}>
          <div className={profile.bgplate}>
            <h2 className={profile.text}>Your Name: {userDetails.name}</h2>
          </div>
          <div className={profile.bgplate}>
            <h2 className={profile.text}>Phone No.: {userDetails.phone_no}</h2>
          </div>
          <div className={profile.bgplate}>
            <h2 className={profile.text}>Email Id: {userDetails.email}</h2>
          </div>
          <div className={profile.bgplate1}>
            <h2 className={profile.text}>
              College: {user.college_name}
            </h2>
          </div>
          <div className={profile.bgplate}>
            <h2 className={profile.text}>
              College ID: {user.college_id}
            </h2>
          </div>
          <div className={profile.bgplate1}>
            <h2 className={profile.text}>Branch: {user.branch}</h2>
          </div>
          <div className={profile.bgplate}>
            <h2 className={profile.text}>Year: {user.year}</h2>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className={profile.scroller}>
        <h1 className={profile.register}>Registered events</h1>
        <div className={profile.registered}>
          {/* Add your events logic here */}
          <img
            src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg"
            className="events"
            alt="Event"
          ></img>
        </div>
        <br />
      </div>
    </div>
  );
}

export default ProfilePage;
