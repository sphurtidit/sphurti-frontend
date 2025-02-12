import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./msg.css";

const FromTheDesk = ({ text, image, name, desgn, type }) => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth < 1000);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MsgContainer text={text} image={image} name={name} desgn={desgn} type={type} isMobileView={isMobileView} />
  );
};

const MsgContainer = ({ text, image, name, desgn, type, isMobileView }) => {
  const [expandedContent, setExpandedContent] = useState(false);
  const toggle = () => setExpandedContent(!expandedContent);

  const col = type === 1 ? "red-bg" : "blue-bg"; // Different background colors

  return (
    <div className={`main-msg-container ${col} ${isMobileView ? "mobile-view" : ""}`}>
      <div className="left-column-msg">
        <img src={image} alt={name} className="msg-left-image" />
      </div>
      <div className="right-column-msg">
        <div className="name-msg">
          <p className="name-msg-name">{name}</p>
          <p className="name-msg-designation">{desgn}</p>
          <p className="msg-content">
            {expandedContent ? text : text.slice(0, 400)}
            {text.length > 400 && (
              <span onClick={toggle} className="toggle-button-msg">
                {expandedContent ? "...Read Less" : "...Read More"}
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

// **PropTypes Validation**
FromTheDesk.propTypes = {
  name: PropTypes.string.isRequired,
  desgn: PropTypes.string.isRequired,
  type: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

MsgContainer.propTypes = { ...FromTheDesk.propTypes, isMobileView: PropTypes.bool.isRequired };

export default FromTheDesk;
