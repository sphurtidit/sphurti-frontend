import React from "react";
import cardStyles from "./Card.module.css";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (props.link) {
      window.open(props.link, "_blank"); // Open link in a new tab
    }
  };

  return (
    <div className={cardStyles.mainbox}>
      <div className={cardStyles.gradient}></div>
      <div className={cardStyles.devbox}>
        <div className={cardStyles.profile}>
          <img
            className={cardStyles.img}
            src={typeof props.img === "string" ? props.img : props.img.default}
            alt={props.name}
          />
        </div>
        <div className={cardStyles.title}>{props.name}</div>
        <div className={cardStyles.description}>{props.des}</div>
        <button className={cardStyles.btn} onClick={handleClick}>
          Contact
        </button>
      </div>
    </div>
  );
};

export default Card;
