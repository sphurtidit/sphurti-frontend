import React, { useEffect } from "react";
import profile from "./profile.module.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useUserStore from "../../store/userStore";
import Navbar from "../Navbar/nav";
import Footer from "../Footer/Footer";

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
    <div>
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
                onClick={() => handleNavigation("/comingsoon")}
              >
                Payments
              </button>
              <button
                className={profile.btn}
                onClick={() => {
                  logout();
                  navigate("/");
                }}
              >
                Logout
              </button>

            </div>
            <div className={profile.mainheading}>
              <div className={profile.bgplate}>
                <h2 className={profile.text}> Name: <span className={profile.dox}>{user.name}</span></h2>
              </div>
              <div className={profile.bgplate}>
                <h2 className={profile.text}>Phone No.:<span className={profile.dox}> {user.phone_no}</span></h2>
              </div>
              <div className={profile.bgplate}>
                <h2 className={profile.text}>Email Id:<span className={profile.dox}> {user.email}</span></h2>
              </div>
              <div className={profile.bgplate}>
                <h2 className={profile.text}>
                  College: <span className={profile.dox}>{user.college_name}</span>
                </h2>
              </div>
              <div className={profile.bgplate}>
                <h2 className={profile.text}>
                  College ID: <span className={profile.dox}>{user.college_id}</span>
                </h2>
              </div>
              <div className={profile.bgplate}>
                <h2 className={profile.text}>Branch: <span className={profile.dox}>{user.branch}</span></h2>
              </div>
              <div className={profile.bgplate}>
                <h2 className={profile.text}>Year:<span className={profile.dox}> {user.year}</span></h2>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className={profile.scroller}>
            <h1 className={profile.register}>Registered Events:</h1>
            <div className={profile.registered}>
              <h1>Registered Events coming soon!!</h1>
              {/* <img className={profile.events}
            src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg"
          
            alt="Event"
          ></img> */}
            </div>
            <br />
          </div>
        </div>
      </div>
        {/* <Footer /> */}
    </div>
  );
}

export default ProfilePage;
