import React, { useState, useEffect } from "react";
import profile from "./profile.module.css";
import axios from "axios";

function ProfilePage() {
  const [userDetails, setUserDetails] = useState(null); // State to store user details
  const [error, setError] = useState(null); // State to store any error

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
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError("Failed to fetch user details. Please try again.");
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
    <div className={profile.ProfilePage}>
      <div className={profile.info}>
        <div>
          <div className={profile.image}>
            <h3 className={profile.heading}>Profile photo</h3>
          </div>
          <div className={profile.contact}>
            <h3 className={profile.contactinfo}>
              Phone: {userDetails.phone_no} <br /> Email: {userDetails.email}
            </h3>
          </div>
        </div>
        <div className={profile.mainheading}>
          <div className={profile.bgplate}>
            <h2 className={profile.text}>
              Your Name: {userDetails.name}
            </h2>
          </div>
          <div className={profile.bgplate1}>
            <h2 className={profile.text}>
              College: {userDetails.college_name}
            </h2>
          </div>
          <div className={profile.bgplate}>
            <h2 className={profile.text}>
              College ID: {userDetails.college_id}
            </h2>
          </div>
          <div className={profile.bgplate1}>
            <h2 className={profile.text}>
              Branch: {userDetails.branch}
            </h2>
          </div>
          <div className={profile.bgplate}>
            <h2 className={profile.text}>
              Year: {userDetails.year}
            </h2>
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
          ></img>
        </div>
        <br />
      </div>
    </div>
  );
}

export default ProfilePage;
