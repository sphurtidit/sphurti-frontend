import {useState, useEffect} from 'react';
import './msg.css';
import PropTypes from 'prop-types';
const FromTheDesk = ({text, image, name, desgn, type}) => {
    const [isDesktopView, setIsDesktopView] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1000) {
              setIsDesktopView(true);
            } else {
              setIsDesktopView(false);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="home">
            {isDesktopView ? <MsgContainer text={text} image={image} name={name} desgn={desgn} type={type}/> 
            : <MsgContainerMob  text={text} image={image} name={name} desgn={desgn} type={type}/>}
        </div>
    );
}

const MsgContainer = ({text, image, name, desgn, type}) => {
    const [expandedContent, setExpandedContent] = useState(false);
const toggle = () => {
    setExpandedContent(!expandedContent);
}
    let col = (type == 1) ? 'yllw' : 'purp';
  return (
    <div className={`main-msg-container ${col}`}>
      <div className="left-column-msg">
        <img src={image} alt="" className="msg-left-image" />
      </div>
      <div className="right-column-msg">
        <div className="name-msg">
            <p className='name-msg-name'>{name}</p>
            <p className='name-msg-designation'>{desgn}</p>
            <p className='msg-content'>
                {expandedContent ? text : text.slice(0, 400)} {
                    text.length > 400 && 
                        <span onClick={toggle}  className='toggle-button-msg'>
                            {expandedContent ? '...Read Less' : '...Read More'}
                        </span>
                }
            </p>
        </div>
      </div>
    </div>
  );
};

const MsgContainerMob = ({text, image, name, desgn, type}) => {
    const [expandedContent, setExpandedContent] = useState(false);
const toggle = () => {
    setExpandedContent(!expandedContent);
}
    let col = (type == 1) ? 'yllw' : 'purp';
  return (
    <div className={`main-msg-container ${col}`}>
      <div className="left-column-msg">
        <div className='msg-details-img'>
        <img src={image} alt="" className="msg-left-image" />
        </div>
        <div className='msg-details'>
        <p className='name-msg-name'>{name}</p>
        <p className='name-msg-designation'>{desgn}</p>
        </div>
      </div>
      <div className="right-column-msg">
        <div className="name-msg">
            <p className='msg-content'>
                {expandedContent ? text : text.slice(0, 400)} {
                    text.length > 400 && 
                        <span onClick={toggle} className='toggle-button-msg'>
                            {expandedContent ? '...Read Less' : '...Read More'}
                        </span>
                }
            </p>
        </div>
      </div>
    </div>
  );
};

// FromTheDesk.propTypes = {
//     name: PropTypes.string,
//     desgn: PropTypes.string,
//     type: PropTypes.Number,
//     image: PropTypes.string,
//     text: PropTypes.string
//   };

//   MsgContainer.propTypes = {
//     name: PropTypes.string,
//     desgn: PropTypes.string,
//     type: PropTypes.number,
//     image: PropTypes.string,
//     text: PropTypes.string
//   };  

//   MsgContainerMob.propTypes = {
//     name: PropTypes.string,
//     desgn: PropTypes.string,
//     type: PropTypes.number,
//     image: PropTypes.string,
//     text: PropTypes.string
//   };

export default FromTheDesk;
