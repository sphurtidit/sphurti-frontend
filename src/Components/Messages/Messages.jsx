import { useState } from "react";
import "./messages.css";
import raghurama from "../../assets/graghurama.png";
import drrakeshmohan from "../../assets/drrakeshmohan.png";

const Messages = () => {
  const [expandedContent, setExpandedContent] = useState(null);

  const toggleContent = (contentNumber) => {
    setExpandedContent(
      expandedContent === contentNumber ? null : contentNumber
    );
  };

  const getBoxStyle = () => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      if (expandedContent === 1) {
        return {
          marginTop: "-227%",
        };
      } else if (expandedContent === 2) {
        return {
          marginTop: "-245%",
        };
      } else {
        return {
          marginTop: "-167%",
        };
      }
    }
    return {
      marginTop: expandedContent ? "-60%" : "-38%",
    };
  };

  const box = getBoxStyle();

  const getBox1Style = () => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      return {
        backgroundColor: "#FFB800",
        marginTop: expandedContent === 1 ? "-61%" : "1%",
        height: expandedContent === 1 ? "600px" : "330px",
      };
    }
    return {
      backgroundColor: "#FFB800",
      marginTop: expandedContent === 1 ? "-44%" : "-30%",
      height: expandedContent === 1 ? "580px" : "230px",
    };
  };
  const box1 = getBox1Style();

  const getBox2Style = () => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      return {
        height: expandedContent === 2 ? "660px" : "330px",
        backgroundColor: "#7F1BB6",
        marginTop: "3%",
      };
    }
    return {
      height: expandedContent === 2 ? "580px" : "230px",
      backgroundColor: "#7F1BB6",
      marginTop: "2%",
    };
  };
  const box2 = getBox2Style();

  const getHeadBoxStyle = () => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      return {
        marginTop: expandedContent ? "17%" : "0%",
      };
    }
    return {
      marginTop: expandedContent ? "2%" : "5%",
    };
  };

  const headbox = getHeadBoxStyle();
  const getContent1 = () => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      return {
        marginBottom: expandedContent === 1 ? "8%" : "20%",
      };
    }
    return {
      marginBottom: expandedContent === 1 ? "8%" : "10%",
    };
  };
  const content1 = getContent1();
  const content2 = {
    marginBottom: expandedContent === 2 ? "12%" : "12%",
  };

  return (
    <>
      <div className="headbox" style={headbox}>
        <h1 className="head">MESSAGES</h1>
      </div>
      <div className="contentbox">
        <div className="content1" style={content1}>
          <h1 className="facname">PROF. G. RAGHURAMA</h1>
          <h3 className="designation">VICE CHANCELLOR, DIT UNIVERSITY </h3>
          <p className="message">
            Sports is not just about physical exercise and competition. It
            instils team spirit, leadership qualities, and develops performance
            character traits such as grit, resilience, and self-discipline. Its
            benefits are not limited only to those who play, but also to those
            who watch and support the players. DIT University’s annual sports
            festival Sphurti is one of the occasions that brings all DITians
            together
            {expandedContent === 1 ? (
              <>
                {
                  <p>
                    <br />I am happy to note that the annual sports festival is
                    being
                    <br />
                    organized during 13-15 March 2024.
                    <br />
                    This event will definitely encourage our students to improve
                    their sports skill as well as improve their overall mental &
                    physical health. My best wishes to the organizers for a
                    successful event. This year being our Silver Jubilee year, I
                    hope the event is organized in a manner befitting the
                    occasion.
                    <br />
                    I wish the event a grand success.
                    <br />
                    May all have a great and peaceful &quot;SPHURTI -2024&quot;.
                    <br />
                    <br />
                    Jai Hind!
                    <br />
                    <strong>Prof. G. Raghurama</strong>
                    <br />
                    <strong>Vice Chancellor </strong>
                    <br />
                    <strong>DIT University, Dehradun.</strong>
                  </p>
                }
                <button className="readmore" onClick={() => toggleContent(1)}>
                  Read less
                </button>
              </>
            ) : (
              <button className="readmore" onClick={() => toggleContent(1)}>
                Read more
              </button>
            )}
          </p>
        </div>
        <div className="content2" style={content2}>
          <h1 className="facname">DR. RAKESH MOHAN</h1>
          <h3 className="designation">
            DEAN, STUDENT WELFARE, DIT UNIVERSITY{" "}
          </h3>
          <p className="message">
            I take great pleasure in welcoming all students and sports persons
            to the SPHURTI-2024, the eighth annual sports meet of DIT
            University, from 13th March to 15 March 2024. On this occasion, I
            extend my warm wishes to all the sports persons with a great motto
            of &quot;Aim for excellence, not perfection.&quot; we will form the nucleus of
            change when we combine efforts with those who have walked the path
            before us and are
            {expandedContent === 2 ? (
              <>
                {
                  <p>
                    <br />
                    combine efforts with those who have walked the path before
                    us and are standing ready to create a year of not just being
                    competitive but one of athletic dominance. Once you’ve
                    prepared mentally and physically for your game, then you are
                    ready to do your best-and your best is the best you can do.
                    <br />
                    The DIT University, Dehradun, under the leadership of
                    Hon&apos;ble vice Chancellor, Prof. G. Raghurama is fully
                    committed for all around development and empowerment of
                    students so that they can realize their full potential and
                    also contribute to the career-building process. Not only
                    that, the DIT University, Dehradun is focused on Scientific
                    development and firmly holds the view that the students
                    should be active participants and not just passive
                    recipients of the knowledge process. Sports play a key role
                    in development of personality of the students. In fact,
                    sports should be a way of life. I call upon the students to
                    make sports an integral part of their life.
                    <br />
                    <br />
                    <strong>Prof. (Dr.) Rakesh Mohan</strong>
                    <br />
                    <strong>Dean(Student Welfare)</strong>
                  </p>
                }
                <button className="readmore" onClick={() => toggleContent(2)}>
                  Read less
                </button>
              </>
            ) : (
              <button className="readmore" onClick={() => toggleContent(2)}>
                Read more
              </button>
            )}
          </p>
        </div>
      </div>
      <div style={box}>
        <div className="box" style={box1}>
          <img className="facpics" src={raghurama} alt="Raghurama" />
        </div>
        <div className="box" style={box2}>
          <img className="facpics" src={drrakeshmohan} alt="Dr. Rakesh Mohan" />
        </div>
      </div>
    </>
  );
};

export default Messages;