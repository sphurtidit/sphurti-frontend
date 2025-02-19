import React from 'react';
import styles from "./ProfileCard.module.css"; // Ensure correct import
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import PropTypes from "prop-types";

const ProfileCard = ({ type, image }) => {
  let col = type === 1 ? "blue" : "red";

  return (
    <div className={`${styles['sports-container']} ${styles[col]}`}>
      
      <div className={styles['left-column']}>
        <div className={styles.containerss}>
          <p className={styles['sports-heading']}>BasketBall</p>
        </div>
        <h2 className={styles.tex}>Team Name</h2>
        <h2 className={styles.tex}>4 members</h2>
      </div>
      
      <div className={styles['right-column']}>
        <img src={image} className={styles.image} alt="Sports event" />
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  type: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProfileCard;