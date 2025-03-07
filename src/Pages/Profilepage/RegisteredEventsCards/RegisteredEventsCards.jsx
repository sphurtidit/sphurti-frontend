import "./RegisteredEventsCards.css";
import eventImages from "../../../utils/eventImages";
import { FaCircleCheck } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const RegisteredEventsCards = ({ data }) => {
    const navigate = useNavigate();
  return (
    <div className="whole-container">
      <div className="rcard-container">
        <div className="rcard-title">
          <div className="rcard-events">
            <p className="rcard-heading">
              {data.eventName} - {data.categoryName}
            </p>

            <img
              src={eventImages[data.eventName.toLowerCase()]}
              alt="Sports event"
            />
          </div>
        </div>
        <div className="rcard-body">
          <div className="rcard-left">
            <p className="rcard-text"> Team Name: {data.teamName}</p>
            <p className="rcard-text">{data.member.length} members</p>
          </div>
        </div>
        <div className="rcard-footer">
          <div
            className={`rcard-status ${
              data.payStatus ? "paid" : "rcard-unpaid"
            }`}
          >
            {data.payStatus ? (
              <FaCircleCheck style={{ color: "green" }} /> // Show Check icon if Paid
            ) : (
              <IoIosCloseCircle style={{ color: "red" }} /> // Show Cross icon if Unpaid
            )}
            {data.payStatus ? "Paid" : "Non-Paid"}
          </div>

          {!data.accommodation ? (
  // If accommodation is NOT opted
  <div className={`rcard-status ${data.payStatus ? "paid" : "rcard-unpaid"}`}>
    Accommodation Not Opted
    <div className={`rcard-status-box-${data.payStatus ? "paid" : "unpaid"}`}></div>
  </div>
) : (
  // If accommodation IS opted, check if it's paid or unpaid
  
  <div className={`rcard-status ${data.payAccommodation ? "paid" : "rcard-unpaid"}`}>
    Accommodation {data.payAccommodation ? "Paid" : "Unpaid"}
    <div className={`rcard-status-box-${data.payAccommodation ? "paid" : "unpaid"}`}></div>
  </div>
)}

        </div>
        <div className="rcard-buttons">
            {/* <button className="rcard-button">View Details</button> */}
            <button className="rcard-button" onClick={() => navigate(`/Reg_Pg1/${data._id}`)}>Edit Registration</button>
        </div>
      </div>
    </div>
  );
};

export default RegisteredEventsCards;
