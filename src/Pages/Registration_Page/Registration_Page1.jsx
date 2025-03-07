import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import "./registration_page.css";
import useUserStore from "../../store/userStore";
import useEventStore from "../../store/eventStore";
import Navbar from "../../Components/Navbar/Navbar";

const RegistrationForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { getRegisteredEvent, getEventCategoryData } = useEventStore();
  const { id } = useParams();
  const { user, fetchUser } = useUserStore();
  const [nextData, setNextData] = useState({});
  const [categoryData, setCategoryData] = useState(location.state || {});
  const [formData, setFormData] = useState({
    team_name: "",
    captain_name: "",
    phone: "",
    alternate_phone: "",
    name_vc: "",
    name_so: "",
    clg_name: "",
    clg_mail: "",
    accommodation: false,
  });
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch user details and event data in the same effect
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading

      try {
        // Step 1: Fetch user data first
        let fetchedUser = user;
        if (!user) {
          await fetchUser();
          fetchedUser = useUserStore.getState().user; // Get updated user after fetching
        }

        // Step 2: Update form data with user details
        setFormData((prevForm) => ({
          ...prevForm,
          phone: fetchedUser?.phone_no || "",
          clg_mail: fetchedUser?.email || "",
          clg_name: fetchedUser?.college_name || "",
        }));

        // Step 3: Fetch registration and category data if ID exists
        if (id) {
          const RegData = await getRegisteredEvent(id);
          console.log("RegData", RegData);

          if (RegData) {
            const catData = await getEventCategoryData(RegData.catId);
            if (catData) {
              setCategoryData(catData);
            }
            setNextData({member : RegData.member, faculty : RegData.faculty});
            setFormData((prevForm) => ({
              ...prevForm,
              team_name: RegData.teamName || "",
              captain_name: RegData.captainName || "",
              phone: RegData.phoneNo || prevForm.phone, // Use existing if empty
              alternate_phone: RegData.alternateNo || "",
              name_vc: RegData.nameVC || "",
              name_so: RegData.nameSO || "",
              clg_name: fetchedUser?.college_name || prevForm.clg_name, // Ensure clg_name from user
              clg_mail: RegData.clgMail || prevForm.clg_mail,
              accommodation: RegData.accommodation || false,
              payStatus: RegData.payStatus || false,
              payAccommodation: RegData.payAccommodation || false,
            }));
          }
        }
      } catch (error) {
        console.error("Error fetching registration data:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchData();
  }, [id, fetchUser, getRegisteredEvent, getEventCategoryData, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevForm) => ({
      ...prevForm,
      [name]: name === "accommodation" ? value === "true" : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(id) {
      navigate(`/Reg_pg2/${id}`, { state: { formData, categoryData, nextData } });
    } else {
      navigate("/Reg_pg2", { state: { formData, categoryData } });
    }
  };

  return (
    <div className="registration-container">
      <Navbar />
      <div className="reg-form-container">
        <h1>Registration Form</h1>
        {loading ? (
          <div className="loading">
            <p>Loading...</p>
          </div>
        ) : (
          <>
            <div className="reg-heading">{categoryData.eventName}</div>
            <div className="reg-categoryname">{categoryData.categoryName}</div>
            <form onSubmit={handleSubmit}>
              <div className="input-field">
                <label htmlFor="clg_name">College Name</label>
                <input
                  type="text"
                  id="clg_name"
                  name="clg_name"
                  value={formData.clg_name}
                  disabled
                />
              </div>
              <div className="input-field">
                <label htmlFor="team_name">Team Name</label>
                <input
                  type="text"
                  id="team_name"
                  name="team_name"
                  value={formData.team_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-field">
                <label htmlFor="captain_name">Captain Name</label>
                <input
                  type="text"
                  id="captain_name"
                  name="captain_name"
                  value={formData.captain_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-field">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-field">
                <label htmlFor="alternate_phone">Alternate Phone Number</label>
                <input
                  type="number"
                  id="alternate_phone"
                  name="alternate_phone"
                  value={formData.alternate_phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-field">
                <label htmlFor="name_vc">Vice Chancellor Name</label>
                <input
                  type="text"
                  id="name_vc"
                  name="name_vc"
                  value={formData.name_vc}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-field">
                <label htmlFor="name_so">Sports Officer Name</label>
                <input
                  type="text"
                  id="name_so"
                  name="name_so"
                  value={formData.name_so}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-field">
                <label htmlFor="clg_mail">College Email</label>
                <input
                  type="email"
                  id="clg_mail"
                  name="clg_mail"
                  value={formData.clg_mail}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-field">
                <label htmlFor="accommodation">Do you require accommodation?</label>
                <select
                  id="accommodation"
                  name="accommodation"
                  value={formData.accommodation}
                  onChange={handleChange}
                  required
                  disabled={formData.payAccommodation}
                >
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </select>
              </div>
              <button type="submit" className="btn">
                Next
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default RegistrationForm;
