import React from 'react';
import cardStyles from "./Card.module.css";
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (props.link) {
            window.open(props.link, '_blank'); // Open link in a new tab
        }
    };

    return(
        <div className={cardStyles.mainbox}>
            <div className={cardStyles.gradient}></div>
            <div className={cardStyles.devbox}>
                <div className={cardStyles.profile}>
                    <img className={cardStyles.img} src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=" alt=""/>
                </div>
                <div className={cardStyles.title}>{props.name}</div>
                <div className={cardStyles.description}>{props.des}</div>
                <button className={cardStyles.btn} onClick={handleClick}>Contact</button>
            </div>
        </div>
    )
}

export default Card;