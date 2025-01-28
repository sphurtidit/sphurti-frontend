import React, { useState } from "react";
import "./Registration_Page2.css"; // Import CSS for styling

const TeamRegistration = () => {
  const [members, setMembers] = useState([{ id: 1, name: "", collegeId: "", aadharId: "" }]);

  // Function to add a new member
  const addMember = () => {
    setMembers([...members, { id: members.length + 1, name: "", collegeId: "", aadharId: "" }]);
  };

  // Function to delete a member
  const deleteMember = (id) => {
    setMembers(members.filter((member) => member.id !== id));
  };

  // Handle input change
  const handleInputChange = (index, field, value) => {
    const updatedMembers = [...members];
    updatedMembers[index][field] = value;
    setMembers(updatedMembers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Team:", members);
  };

  return (
    <div className="Sarfaraj">
      <h1>Team Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="member-details-section">
          <h2>Member Details</h2>
          {members.map((member, index) => (
            <div className="member-box" key={member.id}>
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
              {members.length > 1 && (
                <button type="button" className="delete-btn" onClick={() => deleteMember(member.id)}>
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
  );
};

export default TeamRegistration;