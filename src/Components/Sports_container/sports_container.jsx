import { useState } from 'react';
import "./sports_container.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import flag from '../../assets/flag.png'

const SportsContainer = (games) => {
    const [showContent, setShowContent] = useState(false);
    const viewDetails = () => {
        setShowContent(!showContent);
    }
    let col = (games.type == 1) ? "yellow" : (games.type == 2) ? "red" : "purple";
    let exp = (showContent)? "expanded" : "";
    return (
        <div className={`sports-container ${col} ${exp}`}>
            <div className="left-column">
                <div className='container'>
                    <p className='sports-heading'>{games.name}</p>
                    <div className="reg">
                        <img src={flag}></img>
                        <p className='reg-text'>REGISTRATION</p>
                        <img src={flag}></img>
                    </div>
                    <div className="fee">
                        <div className="fee-text">
                            <p className="fees">FEES</p>
                            <p className="team">PER TEAM</p>
                        </div>
                        <div className="fee-text">
                            <p className="cate">BOYS</p>
                            <p className="cate-fees">{games.boyfees}</p>
                        </div>
                        <div className="vertical-line"></div>
                        <div className="fee-text">
                            <p className="cate">GIRLS</p>
                            <p className="cate-fees">{games.girlfees}</p>
                        </div>
                    </div>
                    <div className="buttons">
                        <button title='Register' className='primary' >
                            Register</button>
                        <button title='detail' className='secondary' onClick={viewDetails}>
                            {showContent ? (<>View Less <MdKeyboardArrowUp /> </>) : (<>View More <MdKeyboardArrowDown /> </>)}
                        </button>
                    </div>
                </div>
                {showContent &&
                    <div className="details">
                        <div className="hr">
                            <hr></hr>
                        </div>
                        <p className="prize">Prize Money:</p>
                        <div className="amount">
                            <p className="winner">Winners: ₹99</p>
                            <div className="vertical-line"></div>
                            <p className="runner">Runner Up: ₹99</p>
                        </div>
                        <div className="schedule">
                            <p className="sch-text">Schedule:</p>
                            <a href="">Download Schedule</a>
                        </div>
                        <div className="schedule">
                            <p className="sch-text">Rule Book:</p>
                            <a href="">Download</a>
                        </div>
                        <div className="coord">
                            <p className="coord-text">Coordinators:</p>
                            <div className="info">
                                <div className="cinfo">
                                    <p className="name">Soumya Nilay:</p>
                                    <p className="mob">8002686694</p>
                                </div>

                                <div className="cinfo">
                                    <p className="name">Maanav Aryan:</p>
                                    <p className="mob">9334914647</p>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div className="right-column">
                <img src={showContent ? games.image : games.imagesmall} className="image"></img>
            </div>
        </div>
    );
};

export default SportsContainer;
