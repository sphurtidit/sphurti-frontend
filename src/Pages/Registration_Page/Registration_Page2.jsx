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
  const [loading, setLoading] = useState(false);

  const minMembers = categoryData?.minNumber ? Math.max(1, categoryData.minNumber) : 1;
  const maxMembers = categoryData?.maxNumber ? Math.max(minMembers, categoryData.maxNumber) : 20;

  const [members, setMembers] = useState(
    Array.from({ length: minMembers }, () => ({ memberName: "", clgId: "", govId: "" }))
  );

  const [facultyMembers, setFacultyMembers] = useState([]);
  const maxFaculty = 2; // Maximum 2 faculties allowed

  const addFaculty = () => {
    if (facultyMembers.length < maxFaculty) {
      setFacultyMembers([...facultyMembers, { facultyName: "", facultyAadhar: "" }]);
    } else {
      setInfo(`You can add up to ${maxFaculty} faculty members only.`);
    }
  };

  const deleteFaculty = (index) => {
    setFacultyMembers(facultyMembers.filter((_, i) => i !== index));
  };

  const handleFacultyInputChange = (index, field, value) => {
    const updatedFaculty = [...facultyMembers];
    updatedFaculty[index][field] = value;
    setFacultyMembers(updatedFaculty);
  };



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

    for (const faculty of facultyMembers) {
      if (faculty.facultyAadhar.length !== 12) {
        setInfo("Each Aadhar ID must be exactly 12 digits long.", "error");
        setLoading(false);
        return;
      }
    }

    console.log(facultyMembers);
    if (await registerTeam({ members, formData, categoryData, facultyMembers })) {
      setInfo("Team registered successfully", "success");
      setTimeout(() => {
        setLoading(false);
        navigate("/");
      }, 1000);
    } else {
      setLoading(false);
    }
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
          <div className="table-responsive">
            <table className="member-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>College ID</th>
                  <th>Aadhar ID</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <input
                        type="text"
                        placeholder="Enter Member Name"
                        value={member.memberName}
                        onChange={(e) => handleInputChange(index, "memberName", e.target.value)}
                        required
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="Enter College ID"
                        value={member.clgId}
                        onChange={(e) => handleInputChange(index, "clgId", e.target.value)}
                        required
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        placeholder="Enter Aadhar ID"
                        value={member.govId}
                        onChange={(e) => handleInputChange(index, "govId", e.target.value)}
                        required
                      />
                    </td>
                    <td>
                      {members.length > minMembers && (
                        <MdDeleteOutline className="delete-btn" onClick={() => deleteMember(index)} />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button type="button" className="btn add-btn" onClick={addMember}>
            Add Member
          </button>
          {facultyMembers.length > 0 && (
            <div className="table-responsive">
              <table className="member-table"> {/* Using same class for consistent styling */}
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Aadhar ID</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {facultyMembers.map((faculty, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter Faculty Name"
                          value={faculty.facultyName}
                          onChange={(e) => handleFacultyInputChange(index, "facultyName", e.target.value)}
                          required
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          placeholder="Enter Aadhar ID"
                          value={faculty.facultyAadhar}
                          onChange={(e) => handleFacultyInputChange(index, "facultyAadhar", e.target.value)}
                          required
                        />
                      </td>
                      <td>
                        <MdDeleteOutline className="delete-btn" onClick={() => deleteFaculty(index)} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <button type="button" className="btn add-btn" onClick={addFaculty}>
            Add Faculty
          </button>

          <button type="submit" className="btn" disabled={loading}>{loading ? <FaSpinner /> : "Submit"}</button>
        </form>
      </div>
    </div>
  );
};

export default TeamRegistration;
