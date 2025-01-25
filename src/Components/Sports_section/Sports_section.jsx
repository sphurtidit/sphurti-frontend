import SportsContainer from '../Sports_container/sports_container';
import './Sports_section.css';
import badmintonimg from '../../assets/badminton.png'
import cricketimg from '../../assets/cricket.png'
import footballimg from '../../assets/football.png'
import volleyballimg from '../../assets/volleyball.png'
import basketballimg from '../../assets/basketball.png'
import tabletennisimg from '../../assets/table tennis.png'
import { PropTypes } from 'prop-types';

// const SportsSection = ({rule ,cricket,badminton ,tabletennis ,football ,volleyball,basketball}) => {
const SportsSection = () => {

    return (
        <div className='nav-sports' id='sports-section'>
            {/* {badminton ? () : <div className='loading'>Loading...</div>} */}
            <div className='parent-container-sports'>
                <div className='heading'><h1>SPORTS</h1></div>
                <div className='allsports'>
                    <SportsContainer type="1" image={badmintonimg} key={'badminton'} name="Badminton"/>
                    <SportsContainer type="2" image={basketballimg} key={'basketball'} name="Basketball"/>
                    <SportsContainer type="3" image={cricketimg} key={'cricket'} name="Cricket"/>
                    <SportsContainer type="3" image={volleyballimg} key={'volleyball'} name="Volley Ball"/>
                    <SportsContainer type="1" image={tabletennisimg} key={'tabletennis'} name="Table Tennis"/>
                    <SportsContainer type="2" image={footballimg} key={'football'} name="Football"/>
                </div>
            </div>
        </div>
    );
};

SportsSection.propTypes = {
    cricket: PropTypes.map,
    badminton: PropTypes.map,
    tabletennis: PropTypes.map,
    football: PropTypes.map,
    volleyball: PropTypes.map,
    basketball: PropTypes.map,
    rule: PropTypes.string,
  };

export default SportsSection;
