import React, { useState } from "react";
import "./FAQ.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [copyMessage, setCopyMessage] = useState(false);

  const faqs = [
    { question: "Will accommodation be provided for participants?", answer: "Yes, accommodation will be provided to the Teams. They must confirm their registration process including accommodation request." },
    { question: "What are the transportation options to reach the venue?", answer: "Our campus is easily accessible by train, bus, and flights." },
    { question: "Are meals provided to participants?", answer: "Yes, all participants will receive complimentary meals, including breakfast, lunch, and dinner, during the event. Meal coupons will be distributed upon arrival." },
    { question: "What should participants bring with them?", answer: "Participants must bring their sports gear, a valid student ID, Adhaar Card and other documents communicated during registration process. It’s also recommended to carry personal essentials and a water bottle." },
    { question: "Are there specific rules or guidelines for each sport?", answer: "Rules will be grounded by National/International regulating bodies. A detailed rulebook about every sport is available on the website." },
    { question: "Will there be professional referees present?", answer: "Yes, professional referees/judges from District/State/National Level bodies will oversee all matches." },
    { question: "Will certificates or awards be given to participants?", answer: "Yes, e-certificates of participation will be awarded to all registered participants. Winners and runners-up in each category will receive medals, trophies and certificates." },
    { question: "How to confirm Registration/Accommodation?", answer: "Participation will only be confirmed after the completion of payment for registration with/without accommodation." },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("sphurti@dituniversity.edu.in").then(() => {
      setCopyMessage(true);
      setTimeout(() => setCopyMessage(false), 2000); // Hide message after 2 seconds
    }).catch((err) => {
      console.error("Failed to copy: ", err);
    });
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked <span className="highlight">Questions</span></h1>
      {faqs.map((faq, index) => (
        <div className={`faq-item ${activeIndex === index ? "active" : ""}`} key={index}>
          <button onClick={() => toggleAnswer(index)}>
            <strong>{index + 1}. {faq.question}</strong>
            <span className="toggle-icon">
              <FontAwesomeIcon icon={activeIndex === index ? faChevronUp : faChevronDown} />
            </span>
          </button>
          {activeIndex === index && <p className="answer">{faq.answer}</p>}
        </div>
      ))}
      <div className="contact-section">
        <p><strong>Have any other questions?</strong></p>
        <p>Don't hesitate to send us an email with your enquiry or statement at:</p>
        <div className="contact-box">
          <a className="email" href="mailto:sphurti@dituniversity.edu.in" id="email-address">sphurti@dituniversity.edu.in</a>
          <button className="copy-button" onClick={copyEmail}>
            <FontAwesomeIcon icon={faCopy} />
            <span className="icon"></span> Copy
          </button>
        </div>
        {copyMessage && <p className="copy-message">Email address copied to clipboard!</p>}
      </div>
    </div>
  );
};

export default FAQPage;
