import React, { useState } from "react";
import "./Registration_Page2.css";
import { useLocation, useNavigate } from "react-router-dom";
import useInfoStore from "../../store/infoStore";
import useEventStore from "../../store/eventStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from '../Navbar/Navbar';

const TeamRegistration = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, categoryData } = location.state || {};
  const setInfo = useInfoStore.getState().setInfo;
  const registerTeam = useEventStore.getState().registerTeam;
  const [loading, setLoading] = useState(false);

  // Get the minimum number of members from categoryData
  const minMembers = categoryData?.minNumber ? Math.max(1, categoryData.minNumber) : 1;
  const maxMembers = categoryData?.maxNumber ? Math.max(minMembers, categoryData.maxNumber) : 20;

  // Initialize members based on minMembers
  const [members, setMembers] = useState(
    Array.from({ length: minMembers }, () => ({ name: "", collegeId: "", aadharId: "" }))
  );

  const addMember = () => {
    if (members.length < maxMembers) {
      setMembers([...members, { name: "", clgId: "", govId: "" }]);
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

  // Handle input change
  const handleInputChange = (index, field, value) => {
    const updatedMembers = [...members];
    updatedMembers[index][field] = value;
    setMembers(updatedMembers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(loading) {
      return;
    }
    setLoading(true);
    console.log("Submitted Team:", members);
    console.log("Form Data:", formData); 
    if(await registerTeam({ members, formData, categoryData })) {
      setInfo("Team registered successfully", "success");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
    setLoading(false);
  };

  return (
    <>
    <ToastContainer />
    <Navbar/>
    <div className="Sarfaraj">
      <h1>Team Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="member-details-section">
          <h2>Member Details</h2>
          {members.map((member, index) => (
            <div className="member-box" key={index}>
              <h3>Member {index + 1}</h3>
              <input
                type="text"
                placeholder="Enter Member Name"
                value={member.name}
                onChange={(e) => handleInputChange(index, "name", e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Enter College ID"
                value={member.collegeId}
                onChange={(e) => handleInputChange(index, "collegeId", e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Enter Aadhar ID"
                value={member.aadharId}
                onChange={(e) => handleInputChange(index, "aadharId", e.target.value)}
                required
              />
              {members.length > minMembers && (
                <button type="button" className="delete-btn" onClick={() => deleteMember(index)}>
                  Delete Member
                </button>
              )}
            </div>
          ))}
        </div>
        <button type="button" className="add-member-btn" onClick={addMember}>
          Add Member
        </button>
        <button type="submit" className="btn">Submit</button>
      </form>
      
    </div>
    </>
  );
};

export default TeamRegistration;
