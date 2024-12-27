import './nav.css';
import { useRef } from 'react';
import DIT from '../../assets/DIT.png';
import NAAC from '../../assets/naac.png';
import SPHURTI from '../../assets/sphurti.png';
import SPH from '../../assets/sph.png';
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
import Gallery_Button from '../Gallery_Button/Gallery_Button';
import { FaCaretDown } from "react-icons/fa";

function Nav() {
    const navRef = useRef();

    const showNav = () => {
        navRef.current.classList.toggle('show-nav');
    }

    return (
        <nav>
            <div className="logo-left">
                <img src={SPH} alt="SPHURTI" className='logo' />
            </div>
            <div className="main-nav" ref={navRef}>
                <div className="nav-logo-container">
                    <img src={DIT} alt="DIT" className='nav-logo' />
                    <img src={NAAC} alt="NAAC" className='nav-logo' />
                    <img src={SPHURTI} alt="SPHURTI" className='nav-logo' />
                </div>
                <div className="center-button">
                    <Link to="home" offset={-80}><li onClick={showNav}>HOME</li></Link>
                    <Link to="" offset={-80}><li onClick={showNav} >ARCHIVE<FaCaretDown /> 
                        <ul className="dropdown">
                            <div className='content'><a href="#">2024</a></div>
                            <div className='content'><a href="#">2023</a></div>
                            <div className='content'><a href="#">2022</a></div>
                            <div className='content'><a href="#">2021</a></div>
                            <div className='content'><a href="#">2020</a></div>
                            <div className='content'><a href="#">2019</a></div>
                            <div className='content'><a href="#">2018</a></div>
                            <div className='content'><a href="#">2017</a></div>
                            <div className='content'><a href="#">2016</a></div>
                            <div className='content'><a href="#">2015</a></div>
                            <div className='content'><a href="#">2014</a></div>
                            </ul></li></Link>
                    <Link to="nav-sports" offset={-80}><li onClick={showNav}>SPORTS</li></Link>
                    <Link to="acc-section" offset={-80}><li onClick={showNav}>ACCOMMODATION</li></Link>
                    <Link to="team-nav" offset={-80}><li onClick={showNav}>CONTACT</li></Link>
                    {/* <Link to="home" offset={-80}><a>RESULTS</a></Link> */}
                    {/* <a  rel="noreferrer"><li className='reg-nav-button'>GALLERY</li></a> */}
                    <Gallery_Button />
                </div>
                <button className='nav-button nav-close-button' onClick={showNav}>
                    <MdClose />
                </button>
            </div>
            <button className='nav-button' onClick={showNav}>
                <GiHamburgerMenu />
            </button>
        </nav>
    );
}

export default Nav;