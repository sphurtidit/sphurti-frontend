import React, { useState } from 'react';

const TeamRegistration = () => {
  const [members, setMembers] = useState([
    { id: 1, name: '', college_id: '', aadhar_id: '' }
  ]);

  const handleInputChange = (e, memberId, field) => {
    const { value } = e.target;
    setMembers((prevMembers) =>
      prevMembers.map((member) =>
        member.id === memberId ? { ...member, [field]: value } : member
      )
    );
  };

  const addMember = () => {
    const nextMemberId = members.length + 1;
    setMembers([
      ...members,
      { id: nextMemberId, name: '', college_id: '', aadhar_id: '' }
    ]);
  };

  const deleteMember = (id) => {
    setMembers(members.filter((member) => member.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    console.log('Form Submitted with Members:', members);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Team Registration</h1>
      <form onSubmit={handleSubmit}>
        <div style={styles.memberDetailsSection} id="members-container">
          <h2 style={styles.memberSectionHeader}>Member Details</h2>
          {members.map((member) => (
            <div key={member.id} style={styles.memberBox}>
              <h3 style={styles.memberBoxTitle}>Member {member.id}</h3>
              <input
                type="text"
                placeholder="Enter Member Name"
                value={member.name}
                onChange={(e) => handleInputChange(e, member.id, 'name')}
                required
                style={styles.input}
              />
              <input
                type="text"
                placeholder="Enter College ID"
                value={member.college_id}
                onChange={(e) => handleInputChange(e, member.id, 'college_id')}
                required
                style={styles.input}
              />
              <input
                type="text"
                placeholder="Enter Aadhar ID"
                value={member.aadhar_id}
                onChange={(e) => handleInputChange(e, member.id, 'aadhar_id')}
                required
                style={styles.input}
              />
              <button
                type="button"
                onClick={() => deleteMember(member.id)}
                style={styles.deleteBtn}
              >
                Delete Member
              </button>
            </div>
          ))}
        </div>

        <button type="button" onClick={addMember} style={styles.addMemberBtn}>
          Add Member
        </button>
        <button type="submit" style={styles.submitBtn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default TeamRegistration;