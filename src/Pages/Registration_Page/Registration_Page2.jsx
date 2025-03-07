import React, { useState } from "react";
import "./registration_page.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useInfoStore from "../../store/infoStore";
import useEventStore from "../../store/eventStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { FaSpinner } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const TeamRegistration = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, categoryData, nextData } = location.state || {};
  const { id } = useParams();
  const setInfo = useInfoStore.getState().setInfo;
  const { registerTeam, updateTeam } = useEventStore();
  const [loading, setLoading] = useState(false);

  const minMembers = categoryData?.minNumber ? Math.max(1, categoryData.minNumber) : 1;
  const maxMembers = categoryData?.maxNumber ? Math.max(minMembers, categoryData.maxNumber) : 20;

  const isTableTennis = categoryData?.eventName?.trim() === "Table Tennis";

  const [members, setMembers] = useState(
    id && nextData?.member?.length
      ? nextData.member
      : Array.from({ length: minMembers }, () => ({
          memberName: "",
          clgId: "",
          govId: "",
          gender: isTableTennis ? "" : undefined, // Add gender only for Table Tennis
        }))
  );

  const [facultyMembers, setFacultyMembers] = useState(
    id && nextData?.faculty?.length ? nextData.faculty : []
  );
  const maxFaculty = 2;

  const addFaculty = () => {
    if (formData.accommodation && formData.payAccommodation) {
      setInfo("Cannot modify member count when accommodation payment is confirmed.", "error");
      return;
    }

    if (facultyMembers.length < maxFaculty) {
      setFacultyMembers([...facultyMembers, { facultyName: "", facultyAadhar: "" }]);
    } else {
      setInfo(`You can add up to ${maxFaculty} faculty members only.`);
    }
  };

  const deleteFaculty = (index) => {
    if (formData.accommodation && formData.payAccommodation) {
      setInfo("Cannot modify member count when accommodation payment is confirmed.", "error");
      return;
    }

    setFacultyMembers(facultyMembers.filter((_, i) => i !== index));
  };

  const handleFacultyInputChange = (index, field, value) => {
    const updatedFaculty = [...facultyMembers];
    updatedFaculty[index][field] = value;
    setFacultyMembers(updatedFaculty);
  };

  const addMember = () => {
    if (formData.accommodation && formData.payAccommodation) {
      setInfo("Cannot modify members count when accommodation payment is confirmed.", "error");
      return;
    }

    if (members.length < maxMembers) {
      setMembers([...members, { memberName: "", clgId: "", govId: "", gender: isTableTennis ? "" : undefined }]);
    } else {
      setInfo(`You can add up to ${maxMembers} members only.`);
    }
  };

  const deleteMember = (index) => {
    if (formData.accommodation && formData.payAccommodation) {
      setInfo("Cannot modify member count when accommodation payment is confirmed.", "error");
      return;
    }

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
    if (loading) return;
    setLoading(true);

    // Table Tennis gender validation
    if (isTableTennis) {
      const maleCount = members.filter((member) => member.gender === "Male").length;
      const femaleCount = members.filter((member) => member.gender === "Female").length;

      if (maleCount < 2 || femaleCount < 1) {
        setInfo("For Table Tennis, you need at least 2 males and 1 female in the team.", "error");
        setLoading(false);
        return;
      }
    }

    // Aadhar validation
    for (const member of members) {
      if (member.govId.length !== 12) {
        setInfo("Each Aadhar ID must be exactly 12 digits long.", "error");
        setLoading(false);
        return;
      }
    }

    try {
      let response;
      if (id) {
        response = await updateTeam(id, { members, formData, categoryData, facultyMembers });
      } else {
        response = await registerTeam({ members, formData, categoryData, facultyMembers });
      }

      if (response) {
        setInfo(id ? "Team updated successfully" : "Team registered successfully", "success");
        setTimeout(() => {
          setLoading(false);
          navigate("/");
        }, 1000);
      } else {
        throw new Error("API request failed");
      }
    } catch (error) {
      setInfo("Something went wrong. Please try again.", "error");
      setLoading(false);
    }
  };

  return (
    <div className="registration-container">
      <ToastContainer />
      <Navbar />
      <div className="reg-form-container">
        <h1>Team Details</h1>
        <div className="reg-heading">{categoryData.eventName}</div>
        <div className="reg-categoryname">{categoryData.categoryName}</div>
        <form onSubmit={handleSubmit}>
          <div className="table-responsive">
            <table className="member-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>College ID</th>
                  <th>Aadhar ID</th>
                  {isTableTennis && <th>Gender</th>}
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <input type="text" placeholder="Enter Member Name" value={member.memberName} onChange={(e) => handleInputChange(index, "memberName", e.target.value)} required />
                    </td>
                    <td>
                      <input type="text" placeholder="Enter College ID" value={member.clgId} onChange={(e) => handleInputChange(index, "clgId", e.target.value)} required />
                    </td>
                    <td>
                      <input type="number" placeholder="Enter Aadhar ID" value={member.govId} onChange={(e) => handleInputChange(index, "govId", e.target.value)} required />
                    </td>
                    {isTableTennis && (
                      <td>
                        <select value={member.gender} onChange={(e) => handleInputChange(index, "gender", e.target.value)} required>
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </td>
                    )}
                    <td>
                      {members.length > minMembers && <MdDeleteOutline className="delete-btn" onClick={() => deleteMember(index)} />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button type="button" className="btn add-btn" onClick={addMember}>Add Member</button>
          <button type="submit" className="btn" disabled={loading}>{loading ? <FaSpinner /> : "Submit"}</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default TeamRegistration;
