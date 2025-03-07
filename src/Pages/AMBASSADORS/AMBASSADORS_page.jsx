import React from 'react';
import './AMBASSADORS_page.css';
import Ambassadors1 from "../../assets/Gallery/Ambassadors1.png";
import Ambassadors2 from "../../assets/Gallery/Ambassadors2.png";
import Navbar from '../../Components/Navbar/Navbar';
import Footer from "../../Components/Footer/Footer";

const ambassadorsData = [
  {
    name: "Vibhor Talwar",
    course: "BTech CSE",
    imageSrc: Ambassadors1,
    achievements: [
      "• Represented India at the 11th World Karate Championships, held at Santiago, Chile in 2019 and ranked 11th in my category.",
      "• Achieved 1st place at All India University Games 2021-22 held at Kurukshetra University, Haryana in the senior category men under 67kg.",
      "• Represented DIT in Khelo India University Games 2022, held at Bangalore, Karnataka in discipline karate and secured 3rd place.",
      "• Awarded the scholarship of 3 lac rupees from Delhi Govt. in 2019 for multiple achievements in Karate.",
      "• 9x National champion and 13x State Champion.",
    ],
    colorClass: "red-bg",
  },
  {
    name: "Nikita Singh",
    course: "BTech CSE",
    imageSrc: Ambassadors2,
    achievements: [
      "• All India nationals karate championship.",
      "• Bronze medal 2024 at Haryana Olympic Bhawan Panchkula, organized by Karate Association of India (KAI).",
      "• Ghaziabad district gold 2024 and silver 2022.",
      "• Uttar Pradesh state karate gold 2024 at GLA university, organized by Uttar Pradesh state karate association (UPSKA).",
      "• 1 open international medal and 12+ state and inter-state medals and local championship medals."
    ],
    colorClass: "blue-bg",
  },
];

const AmbassadorsPage = () => {
  return (
    <div className="ambassadors-container">
      <Navbar />
      <section className="ambassadors">
        <h2>AMBASSADORS</h2>
        <div className="ambassadors-grid">
          {ambassadorsData.map((ambassador, index) => (
            <div key={index} className={`ambassador-card ${ambassador.colorClass}`}>
              <div className="image-section">
                <img src={ambassador.imageSrc} alt={ambassador.name} className="ambassador-image" />
              </div>
              <div className="achievements-section">
                <div className="ambassador-info right-align">
                  <p className="ambassador-name">{ambassador.name}</p>
                  <p className="ambassador-course">{ambassador.course}</p>
                </div>
                <ul className="achievements-list">
                  {ambassador.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default AmbassadorsPage;
