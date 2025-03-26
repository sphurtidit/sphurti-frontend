import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Card from "../../Components/DeveloperCard/Card";
import style from "./developers.module.css";
import Footer from "../../Components/Footer/Footer";

// Import local images
import abdullahImg from "../../assets/abdullah.jpeg";
import tanyaImg from "../../assets/tanya.jpeg";
import kashishImg from "../../assets/kashish.png";
import subhodeepImg from "../../assets/subhodeep.jpg";
import aaronImg from "../../assets/aaron.jpg";
import ashiImg from "../../assets/ashi.jpg";
import kaushkiImg from "../../assets/kaushki.jpg";
import sarfarajImg from "../../assets/sarfaraj.jpeg";
import siddharthImg from "../../assets/siddharth.jpg";

const DevelopersPage = () => {
  return (
    <>
      <Navbar />
      <h1 className={style.head}>Developers </h1>
      <div className={style.container}>
        <Card
          name="Abdullah Aziz"
          des="Head of the technical team, leading the development and   involved in managing technical operations, ensuring seamless functionality, of the Sphurti 2025 website."
          link="https://www.linkedin.com/in/abdullah-aziz-020556262/"
          img={abdullahImg}
        />
        <Card
          name="Tanya Yadav"
          des="I am a 3rd year student at DIT University currently pursuing B.Tech CSE"
          link="https://www.linkedin.com/in/tanya-yadav-5712992a7/"
          img={tanyaImg}
        />
        <Card
          name="Kashish"
          des="As a Full Stack Developer, I designed and built the login, signup, profile, winners, and developers pages, ensuring a seamless user experience."
          link="https://www.linkedin.com/in/kashish-chadha"
          img={kashishImg}
        />
        <Card
          name="Subhodeep Samanta"
          des="Full Stack Developer with experience in building scalable real world web applications, I worked in the responsiveness, merging, profile page, sports section for this website"
          link="https://www.linkedin.com/in/subhodeepsamanta/"
          img={subhodeepImg}
        />
      
        <Card
          name="Ashi verma"
          des="Front end "
          link="https://www.linkedin.com/in/ashi-verma-aa8b41230"
          img={ashiImg}
        />
        <Card
          name="Kaushki Gupta"
          des="Was part of frontend team"
          link="https://www.linkedin.com/in/kaushki-gupta"
          img={kaushkiImg}
        />
        <Card
          name="Siddharth"
          des="Full stack developer"
          link="https://www.linkedin.com/in/siddharth-252662198/"
          img={siddharthImg}
        />
        <Card
          name="Sarfaraj Ahamed"
          des="I am a B.Tech CSE 3rd-year student with experience in frontend development. I contributed to building the frontend for the Sphurti page, ensuring a responsive and user-friendly interface."
          link="https://www.linkedin.com/in/sarfaraj-ahamed-a6a606262/"
          img={sarfarajImg}
        />
          <Card
          name="Aaron Jangde"
          des="Technical (Website)"
          link="https://www.linkedin.com/in/aaron-jangde-a8ab3324b/"
          img={aaronImg}
        />
      </div>
      <Footer />
    </>
  );
};

export default DevelopersPage;
