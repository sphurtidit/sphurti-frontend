import './message-section.css';
import FromTheDesk from './msg';
import VC from '../../assets/graghurama.png';
import DSW from '../../assets/drrakeshmohan.png';
const MessageSection = () => {
    const text1 = "Sports is not just about physical exercise and competition. It instils team spirit, leadership qualities, and develops performance character traits such as grit, resilience, and self discipline. Its benefits are not limited only to those who play, but also to those who watch and support the players. DIT University’s annual sports festival Sphurti is one of the occasions that brings all DITians together. \nI am happy to note that the annual sports festival is being organized during 27-29 March 2025. This event will definitely encourage our students to improve their sports skill as well as improve their overall mental & physical health. My best wishes to the organizers for a successful event. This year being our Silver Jubilee year, I hope the event is organized in a manner befitting the occasion. I wish the event a grand success. \nMay all have a great and peaceful \"SPHURTI -2025\"."
    const text2 = "I take great pleasure in welcoming all student and sports person to the SPHURTI-2025, the eighth annual sports meet of DIT University, from 27th March to 29 March 2025. On this occasion, I extend my warm wishes to all the sports persons with a great motto of \"Aim for excellence, not perfection. \" We will form the nucleus of change when we combine efforts with those who have walked the path before us and are combine efforts with those who have walked the path before us and are standing ready to create a year of not just being competitive but one of athletic dominance. Once you’ve prepared mentally and physically for your game, then you are ready to do your best-and your best is the best you can do. \nThe DIT University, Dehradun, under the leadership of Hon'ble vice Chancellor, Prof. G. Raghurama is fully committed for all around development and empowerment of students so that they can realize their full potential and also contribute to the career-building process. Not only that, the DIT University, Dehradun is focused on Scientific development and firmly holds the view that the students should be active participants and not just passive recipients of the knowledge process. Sports play a key role in development of personality of the students. In fact, sports should be a way of life. I call upon the students to make sports an integral part of their life."
    return (
    <div className='msg'>
      <div className='heading'  ><h1>MESSAGES</h1></div>
      <FromTheDesk key = "vc" text={text1} image = {VC} name = {"PROF. G. RAGHURAMA"} desgn = {"VICE CHANCELLOR, DIT UNIVERSITY"} type = {1}/>
      <FromTheDesk key = "dsw" text={text2} image={DSW} name = {"DR. RAKESH MOHAN"} desgn = {"DEAN, STUDENT WELFARE, DIT UNIVERSITY"} type = {2}/>
    </div>
  );
};

export default MessageSection;
