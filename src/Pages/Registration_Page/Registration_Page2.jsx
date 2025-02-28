import React, { useState } from "react";
import "./Registration_Page2.css";
import { useLocation, useNavigate } from "react-router-dom";
import useInfoStore from "../../store/infoStore";
import useEventStore from "../../store/eventStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from '../../Components/Navbar/Navbar';
import Footer from "../../Components/Footer/Footer";
import { FaSpinner } from "react-icons/fa";

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

  // Handle input change
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
    <>
      <ToastContainer />
      <Nav bar/>
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
                  value={member.memberName}
                  onChange={(e) => handleInputChange(index, "memberName", e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Enter College ID"
                  value={member.clgId}
                  onChange={(e) => handleInputChange(index, "clgId", e.target.value)}
                  required
                />
                <input
                  type="number"
                  placeholder="Enter Aadhar ID"
                  value={member.govId}
                  onChange={(e) => handleInputChange(index, "govId", e.target.value)}
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
          <button type="submit" className="btn" disabled={loading}>{loading ? <FaSpinner /> : "Submit"}</button>
        </form>

      </div>
    </>
  );
};

export default TeamRegistration;
