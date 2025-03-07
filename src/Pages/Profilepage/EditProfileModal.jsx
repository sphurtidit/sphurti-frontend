import React, { useState } from "react";
import styles from "./EditProfileModal.module.css";
import foxImage from "../../assets/p image.png";
import pengImage from "../../assets/p image .png";
import girl1Image from "../../assets/p-image1.png";
import girl2Image from "../../assets/p-image2.png";
import rabbitImage from "../../assets/p-image3.png";
import basketballImage from "../../assets/basketball-player.png";

const EditProfileModal = ({ show, onClose, onSave }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!show) return null;

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleSaveClick = () => {
    if (selectedImage !== null) {
      onSave(images[selectedImage]);
    }
  };

  const images = [
    foxImage,
    pengImage,
    girl1Image,
    girl2Image,
    rabbitImage,
    pengImage,
    foxImage,
    pengImage,
    foxImage,
    pengImage,
  ];

  return (
    <>
      <div className={styles.modalOverlay} onClick={onClose}></div>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>
          x
        </button>
        <h2>Edit Profile</h2>
        <div className={styles.imageContainer}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Profile"
              className={`${styles.pImage} ${
                selectedImage === index ? styles.selected : ""
              }`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
        <button className={styles.saveBtn} onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </>
  );
};

export default EditProfileModal;
