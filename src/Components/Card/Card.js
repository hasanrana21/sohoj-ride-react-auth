import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = (props) => {
    console.log(props.vehicle);
    const {firstName, image} = props.vehicle;
    return (
        <Link to={`/destinate/${firstName}`}>
            <div className="single-card">
                <div>
                    <img src={image} alt=""/>
                    <h4 className="text-center pt-3 text-warning">{firstName}</h4>
                </div>
            </div>
        </Link>
    );
};

export default Card;