import React, { useState } from "react";
import "./registration_page.css";
import { useLocation, useNavigate } from "react-router-dom";
import useInfoStore from "../../store/infoStore";
import useEventStore from "../../store/eventStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from '../../Components/Navbar/Navbar';
import Footer from "../../Components/Footer/Footer";
import { FaSpinner } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const TeamRegistration = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, categoryData } = location.state || {};
  const setInfo = useInfoStore.getState().setInfo;
  const registerTeam = useEventStore.getState().registerTeam;
  const [loading, setLoading] = useState(false);\

  const minMembers = categoryData?.minNumber ? Math.max(1, categoryData.minNumber) : 1;
  const maxMembers = categoryData?.maxNumber ? Math.max(minMembers, categoryData.maxNumber) : 20;

  const [members, setMembers] = useState(
    Array.from({ length: minMembers }, () => ({ memberName: "", clgId: "", govId: "" }))
  );

  const addMember = () => {
    if (members.length < maxMembers) {
      setMembers([...members, { memberName: "", clgId: "", govId: "" }]);
    } else {
      setInfo(`You can add up to ${maxMembers} members only.`);
    }
  };

  const deleteMember = (index) => {
    if (members.length > minMembers) {
      setMembers(members.filter((_, i) => i !== index));
    } else {
      alert(`You must have at least ${minMembers} member(s) in the team.`);
    }
  };

  const handleInputChange = (index, field, value) => {
    const updatedMembers = [...members];
    updatedMembers[index][field] = value;
    setMembers(updatedMembers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) {
      return;
    }
    setLoading(true);

    for (const member of members) {
      if (member.govId.length !== 12) {
        setInfo("Each Aadhar ID must be exactly 12 digits long.", "error");
        setLoading(false);
        return;
      }
    }

    if (await registerTeam({ members, formData, categoryData })) {
      setInfo("Team registered successfully", "success");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
    setLoading(false);
  };

  return (
    <div className="registration-container">
      <ToastContainer />
      <Navbar />
      <div className="reg-form-container">
        <h1>Team Details</h1>
        <div className="reg-heading">
          {categoryData.eventName}
        </div>
        <div className="reg-categoryname">
          {categoryData.categoryName}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="member-details-section">
            {members.map((member, index) => (
              <div className="member-box" key={index}>
                <div className="member-box-title">
                  <div className="reg-member">Member {index + 1}</div>
                  {members.length > minMembers && (
                    <MdDeleteOutline className="delete-btn" onClick={() => deleteMember(index)} />
                  )}
                </div>
                <div className="input-field">
                  <label htmlFor={`member-${index + 1}-name`}>Name</label>
                  <input
                    type="text"
                    id="team_name"
                    placeholder="Enter Member Name"
                    value={member.memberName}
                    onChange={(e) => handleInputChange(index, "memberName", e.target.value)}
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor={`member-${index + 1}-college`}>College ID</label>
                  <input
                    type="text"
                    id="team_name"
                    placeholder="Enter College ID"
                    value={member.clgId}
                    onChange={(e) => handleInputChange(index, "clgId", e.target.value)}
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor={`member-${index + 1}-gov`}>Aadhar ID</label>
                  <input
                    type="number"
                    placeholder="Enter Aadhar ID"
                    value={member.govId}
                    onChange={(e) => handleInputChange(index, "govId", e.target.value)}
                    required
                  />
                </div>
              </div>
            ))}
          </div>
          <button type="button" className="btn add-btn" onClick={addMember}>
            Add Member
          </button>
          <button type="submit" className="btn" disabled={loading}>{loading ? <FaSpinner /> : "Submit"}</button>
        </form>
      </div>
    </div>
  );
};

export default TeamRegistration;
