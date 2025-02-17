import React, { useEffect } from "react";
import profile from "./profile.module.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useUserStore from "../../store/userStore";

function ProfilePage() {
  const navigate = useNavigate();
  const { user, fetchUser, logout } = useUserStore();

  useEffect(() => {
    if (!user) {
      fetchUser();
    }
  }, [user, fetchUser]);

  const handleNavigation = (path) => {
    navigate(path);
  };

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
              setTimeout(() => {
                logout();
              }, 1500);
              handleNavigation("/");
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
          {user ? (
            <>
              <div className={profile.bgplate}>
                <h2 className={profile.text}>Your Name: {user.name}</h2>
              </div>
              <div className={profile.bgplate}>
                <h2 className={profile.text}>Phone No.: {user.phone_no}</h2>
              </div>
              <div className={profile.bgplate}>
                <h2 className={profile.text}>Email Id: {user.email}</h2>
              </div>
              <div className={profile.bgplate1}>
                <h2 className={profile.text}>College: {user.college_name}</h2>
              </div>
              <div className={profile.bgplate}>
                <h2 className={profile.text}>College ID: {user.college_id}</h2>
              </div>
              <div className={profile.bgplate1}>
                <h2 className={profile.text}>Branch: {user.branch}</h2>
              </div>
              <div className={profile.bgplate}>
                <h2 className={profile.text}>Year: {user.year}</h2>
              </div>
            </>
          ) : (
            <h2 className={profile.text}>Loading user details...</h2>
          )}
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
