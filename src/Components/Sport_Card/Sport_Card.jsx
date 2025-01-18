// import React, { useState } from "react";
// import "./Sport_Card.css"; // Update the CSS file name if necessary

// const SportsCard = ({ isOpen, onClose }) => {
//   if (!isOpen) return null; // If the modal is not open, don't render it

//   return (
//     <div className="modal-overlay">
//       <div className="modal-container">
//         <button className="close-button" onClick={onClose}>
//           &times;
//         </button>
//         <div className="modal-content">
//           {/* Left Section */}
//           <div className="left-section">
//             <h1>Basketball</h1>
//             <div className="fees-section">
//               <span className="label">Fees</span>
//               <span className="per-team">Per Team</span>
//               <span className="amount">&#8377;1500</span>
//             </div>
//             <div className="details">
//               <p>
//                 <strong>Prize Money:</strong> <br />
//                 Winners: &#8377;99 &nbsp; <span className="pipe">|</span> &nbsp;
//                 Runner Up: &#8377;99
//               </p>
//               <p>
//                 <strong>Schedule:</strong> <a href="#">Download Schedule</a>
//               </p>
//               <p>
//                 <strong>Rule Book:</strong> <a href="#">Download</a>
//               </p>
//             </div>
//             <div className="coordinators">
//               <p>
//                 <strong>Coordinators:</strong>
//               </p>
//               <p>
//                 Name &nbsp; <span className="pipe">|</span> &nbsp; Name
//               </p>
//             </div>
//             <div className="button-group">
//               <button className="register">Register</button>
//               <button className="results">Results</button>
//             </div>
//           </div>

//           {/* Right Section */}
//           <div className="right-section">
//             <img src="basketball.png" alt="Basketball Player" className="image" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SportsCard;
