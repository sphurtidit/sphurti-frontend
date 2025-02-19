import React from 'react';
import Navbar from "../../Components/Navbar/nav";
import Card from "../../Components/DeveloperCard/Card";
import style from "./developers.module.css";
import Footer from '../../Components/Footer/Footer';
import basketball from "../../assets/basketball.png";
import ProfileCard from '../../Components/ProfileCard/ProfileCard';

const DevelopersPage = () => {
  return (
    <>
      <Navbar />
      <h1 className={style.head}>Developers </h1>
      <div className={style.container}>
        <Card name="Kashish" des="I worked as a frontend developer on this website. This was my work, I did it for the first time." link="https://www.linkedin.com/in/kashish-chadha" />
        <Card name="Kashish" des="I worked as a frontend developer on this website. This was my work, I did it for the first time." />
        <Card name="Kashish" des="I worked as a frontend developer on this website. This was my work, I did it for the first time." />
        <Card name="Kashish" des="I worked as a frontend developer on this website. This was my work, I did it for the first time." />
        <Card name="Kashish" des="I worked as a frontend developer on this website. This was my work, I did it for the first time." />
        <Card name="Kashish" des="I worked as a frontend developer on this website. This was my work, I did it for the first time." />
        
      </div>
      <ProfileCard type={1} image={basketball} />
      <Footer/>
    </>
  );
};

export default DevelopersPage;