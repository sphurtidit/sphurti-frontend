import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./registration_page.css";
import useUserStore from "../../store/userStore";
import Navbar from '../../Components/Navbar/Navbar';
import Footer from "../../Components/Footer/Footer";

const RegistrationForm = () => {
  const location = useLocation();
  const categorydata = location.state || {};
  const navigate = useNavigate();
  const { user, fetchUser} = useUserStore();
  const [formData, setFormData] = useState({
    team_name: "",
    captain_name: "",
    phone: "",
    alternate_phone: "",
    name_vc: "",
    name_so: "",
    clg_name: "",
    clg_mail: "",
  });

  useEffect(() => {
    if (!user) {
      fetchUser();
    }
    setFormData({...formData, phone: user.phone_no, clg_mail: user.email, clg_name : user.college_name});
  }, [user, fetchUser]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Reg_pg2", { state: { formData : formData, categoryData : categorydata} }); // Redirect with form data
  };

  return (
    <div className="registration-container">
      <Navbar/>
      <div className="reg-form-container">
      <h1>Registration Form</h1>
        <div className="reg-heading">
          {categorydata.eventName}
        </div>
        <div className="reg-categoryname">
          {categorydata.categoryName}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label htmlFor="team_name">Team Name</label>
            <input
              type="text"
              id="team_name"
              name="team_name"
              placeholder="Enter Team Name"
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
              placeholder="Enter Captain Name"
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
              placeholder="Enter Phone Number"
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
              placeholder="Enter Alternate Phone Number"
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
              placeholder="Enter Vice Chancellor Name"
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
              placeholder="Enter Sports Officer Name"
              value={formData.name_so}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="clg_name">College Name</label>
            <input
              type="text"
              id="clg_name"
              name="clg_name"
              placeholder="Enter College Name"
              value={formData.clg_name}
              onChange={handleChange}
              required
              disabled
            />
          </div>
          <div className="input-field">
            <label htmlFor="clg_mail">College Email</label>
            <input
              type="email"
              id="clg_mail"
              name="clg_mail"
              placeholder="Enter College Email"
              value={formData.clg_mail}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="btn"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
