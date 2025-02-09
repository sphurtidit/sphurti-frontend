import React, { useState } from "react";
import "./FAQ.css";
import { FaChevronDown, FaRegCopy } from "react-icons/fa";
import Nav from '../Navbar/nav';

const faqs = [
  {
    question: "Will accommodation be provided for participants?",
    answer: "Yes, accommodation will be provided to the Teams. They must confirm their registration process including accommodation request.",
  },
  {
    question: "What are the transportation options to reach the venue?",
    answer: "Our campus is easily accessible by train, bus, and flights.",
  },
  {
    question: "Are meals provided to participants?",
    answer: "Yes, all participants will receive complimentary meals, including breakfast, lunch, and dinner, during the event. Meal coupons will be distributed upon arrival.",
  },
  {
    question: "What should participants bring with them?",
    answer: "Participants must bring their sports gear, a valid student ID, Aadhar Card and other documents communicated during the registration process. It’s also recommended to carry personal essentials and a water bottle.",
  },
  {
    question: "Are there specific rules or guidelines for each sport?",
    answer: "Rules will be grounded by National/International regulating bodies. A detailed rulebook about every sport is available on the website.",
  },
  {
    question: "Will there be professional referees present?",
    answer: "Yes, professional referees/judges from District/State/National Level bodies will oversee all matches.",
  },
  {
    question: "Will certificates or awards be given to participants?",
    answer: "Yes, e-certificates of participation will be awarded to all registered participants. Winners and runners-up in each category will receive medals, trophies and certificates.",
  },
  {
    question: "How to confirm Registration/Accommodation?",
    answer: "Participation will only be confirmed after the completion of payment for registration with/without accommodation.",
  },
];

const FaqComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("sphurti@dituniversity.edu.in");
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="faq-container">
      <Nav />
      <div className="faq-box">
        <h1>FAQs</h1>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFaq(index)}>
              <span className="faq-item-number">{index + 1}.</span>
              <span className="faq-text">{faq.question}</span>
              <FaChevronDown className={`toggle-icon ${activeIndex === index ? "rotated" : ""}`} />
            </div>
            <div className={`answer ${activeIndex === index ? "show" : ""}`}>{faq.answer}</div>
          </div>
        ))}
      </div>

      <div className="contact-section">
        <h2 className="contact-title">Have any further questions?</h2>
        <p>Don’t hesitate to send us an email with your enquiry or statement at:</p>
        <div className="contact-box">
          <span className="email">sphurti@dituniversity.edu.in</span>
          <button className="copy-button" onClick={copyEmail}>
            <FaRegCopy /> Copy
          </button>
        </div>
        {copySuccess && <p className="copy-message">Email copied to clipboard!</p>}
      </div>
    </div>
  );
};

export default FaqComponent;