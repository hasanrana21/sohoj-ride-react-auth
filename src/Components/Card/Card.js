import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = (props) => {
    console.log(props.vehicle);
    const {first_name, image} = props.vehicle;
    return (
        <Link to="/destinate">
            <div className="single-card">
                <div>
                    <img src={image} alt=""/>
                    <h4 className="text-center pt-3 text-warning">{first_name}</h4>
                </div>
            </div>
        </Link>
    );
};

export default Card;