import React, { useState } from 'react';
import './FAQ.css';
import Nav from '../Navbar/nav';

const FAQPage = () => {
   
   
    const [activeIndex, setActiveIndex] = useState(null);
    const [copyMessageVisible, setCopyMessageVisible] = useState(false);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const copyEmail = () => {
        const email = "contact@saaj.com";
        navigator.clipboard.writeText(email).then(() => {
            setCopyMessageVisible(true);
            setTimeout(() => {
                setCopyMessageVisible(false);
            }, 2000);
        });
    };

    const faqs = [
        {
            question: "Is there a free trial available for the paid options?",
            answer: "Yes, we offer a free trial for our paid plans. Contact us for more details."
        },
        {
            question: "Is it possible to subscribe to the app annually?",
            answer: "Yes, we offer annual subscription plans for convenience and savings."
        },
        {
            question: "Is it possible to cancel my subscription?",
            answer: "Yes, of course. Just send us an email at contact@saaj.com with a little reason for cancellation, and you will get a refund within 1-2 business days."
        },
        {
            question: "How do I change my account email?",
            answer: "You can change your account email from your profile settings or by contacting support."
        },
        {
            question: "How can I change my payment method?",
            answer: "You can update your payment method in your account settings under billing details."
        }
    ];

    return (
            <div className='main-div' >
                <Nav />
        <div className="faq-page">
         
            <h1 className="faq-title">
                Frequently Asked <span className="highlight">Questions</span>
            </h1>
            <div className="faq-container">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                    >
                        <button
                            onClick={() => toggleAnswer(index)}
                            className="faq-question"
                        >
                            <strong>{index + 1}. {faq.question}</strong>
                            <span className="toggle-icon">{activeIndex === index ? '-' : '+'}</span>
                        </button>
                        <p className="faq-answer" style={{ maxHeight: activeIndex === index ? '200px' : '0' }}>
                            {faq.answer}
                        </p>
                    </div>
                ))}
            </div>

            <div className="contact-section">
                <p className="contact-title"><strong>Have any other questions?</strong></p>
                <p>Don't hesitate to send us an email with your enquiry or statement at:</p>
                <div className="contact-box">
                    <a
                        href="mailto:contact@saaj.com"
                        className="email"
                    >
                        contact@saaj.com
                    </a>
                    <button
                        onClick={copyEmail}
                        className="copy-button"
                    >
                        <span className="icon">&#xf0c5;</span>
                        Copy
                    </button>
                </div>
                {copyMessageVisible && (
                    <p className="copy-message">Email address copied to clipboard!</p>
                )}
            </div>
        </div>
        </div>
    );
};

export default FAQPage;