import React, { useEffect, useState } from "react";
import profile from "./profile.module.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useUserStore from "../../store/userStore";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import editIcon from "../../assets/pen-to-square-solid.svg";
import { Lines } from "react-preloaders";
import basketballImage from "../../assets/basketball-player.png";
import RegisteredEventsCards from "./RegisteredEventsCards/RegisteredEventsCards";
import PayModal from "./paymodal";
import useEventStore from "../../store/eventStore";
import EditProfileModal from "./EditProfileModal"; 

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function ProfilePage() {
  const navigate = useNavigate();
  const { user, fetchUser, logout, getRegisteredEvents, registeredEvents } =
    useUserStore();
  const { events, fetchEvents } = useEventStore();
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false); 
  const [profileImage, setProfileImage] = useState(null); 
  const [registrationData, setRegistrationData] = useState([]);

  useEffect(() => {
    if (events.length === 0) {
      fetchEvents();
    }
  }, [events.length, fetchEvents]);

  useEffect(() => {
    if (!user) {
      fetchUser();
    }
    getRegisteredEvents();
    setLoading(false);
  }, [user, fetchUser, getRegisteredEvents]);

  useEffect(() => {
    if (registeredEvents.length > 0 && events.length > 0) {
      const updatedRegistrations = registeredEvents.map((element) => {
        const eventData = events.find((event) => event._id === element.eventId);
        return {
          ...element,
          eventName: eventData?.name || "Unknown Event",
          categoryName:
            eventData?.eventCategory?.find(
              (category) => category._id === element.catId
            )?.categoryName || "Unknown Category",
        };
      });

      setRegistrationData(updatedRegistrations);
    }
  }, [registeredEvents, events]);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleSaveImage = (image) => {
    setProfileImage(image);
    setEditModalOpen(false);
  };

  return (
    <div>
      {!loading && (
        <>
          <Navbar />
          <div className={profile.ProfilePage}>
            <ToastContainer position="top-right" autoClose={3000} />
            <div className={profile.mainbox}>
              <div className={profile.info}>
                <div className={profile.daba}>
                  <div className={profile.imageContainer}>
                    <div
                      className={profile.image}
                      style={{
                        backgroundImage: `url(${
                          profileImage || basketballImage
                        })`,
                      }}
                    ></div>
                    <img
                      src={editIcon}
                      alt="Edit"
                      className={profile.editIcon}
                      onClick={() => setEditModalOpen(true)} 
                    />
                  </div>
                  <button
                    className={profile.btn1}
                    onClick={() => setModalOpen(true)}
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
                    <h2 className={profile.text}>
                      Name: <span className={profile.dox}>{user?.name}</span>
                    </h2>
                  </div>
                  <div className={profile.bgplate}>
                    <h2 className={profile.text}>
                      Phone No.:
                      <span className={profile.dox}> {user?.phone_no}</span>
                    </h2>
                  </div>
                  <div className={profile.bgplate}>
                    <h2 className={profile.text}>
                      Email Id:
                      <span className={profile.dox}> {user?.email}</span>
                    </h2>
                  </div>
                  <div className={profile.bgplate}>
                    <h2 className={profile.text}>
                      College:{" "}
                      <span className={profile.dox}>{user?.college_name}</span>
                    </h2>
                  </div>
                  <div className={profile.bgplate}>
                    <h2 className={profile.text}>
                      College ID:{" "}
                      <span className={profile.dox}>{user?.college_id}</span>
                    </h2>
                  </div>
                  <div className={profile.bgplate}>
                    <h2 className={profile.text}>
                      Branch:{" "}
                      <span className={profile.dox}>{user?.branch}</span>
                    </h2>
                  </div>
                  <div className={profile.bgplate}>
                    <h2 className={profile.text}>
                      Year:<span className={profile.dox}> {user?.year}</span>
                    </h2>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className={profile.scroller}>
                <h1 className={profile.register}>Registered Events:</h1>
                <div className="carousel-container">
                  <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    breakpoints={{
                      640: { slidesPerView: 1 },
                      768: { slidesPerView: 2 },
                      1024: { slidesPerView: 3 },
                    }}
                    navigation
                    pagination={{ clickable: true }}
                  >
                    {registrationData.length > 0 ? (
                      registrationData.map((event, index) => (
                        <SwiperSlide key={index} className="carousel-slide">
                          <RegisteredEventsCards isPaid={true} data={event} />
                        </SwiperSlide>
                      ))
                    ) : (
                      <div   className={profile.noevents}>No Registered Events Yet!</div>
                    )}
                  </Swiper>
                </div>
                <div className={profile.registered}></div>
                <br />
              </div>
            </div>
          </div>
        </>
      )}
      <PayModal
        show={modalOpen}
        onClose={() => setModalOpen(false)}
        data={registrationData}
        contact={user?.phone_no}
        email={user?.email}
      />
      <EditProfileModal
        show={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        onSave={handleSaveImage} 
      />
      <Lines customLoading={loading} />
    </div>
  );
}

export default ProfilePage;
