import React from 'react';
import { useParams } from 'react-router';
import './DestinateDetails.css';
import Car from '../../images/Frame-2.png';
import Bus from '../../images/Frame-1.png';
import Bike from '../../images/Frame.png';
import Train from '../../images/Group.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAccessibleIcon } from '@fortawesome/free-brands-svg-icons';

const DestinateDetails = (props) => {
    const {firstName} = useParams();
    console.log(props.singleVehicle);
    // const {image} = props.singleVehicle;

    let vehicleImg = "";
    if(firstName === "CAR"){
        vehicleImg = Car;
    }
    if(firstName === "BUS"){
        vehicleImg = Bus;
    }
    if(firstName === "BIKE"){
        vehicleImg = Bike;
    }
    if(firstName === "TRAIN"){
        vehicleImg = Train;
    }
    return (
        <>
            <div class="search-result d-flex">
                <img src={vehicleImg} alt=""/>
                <h5>{firstName}</h5>
                <h5><FontAwesomeIcon icon={faAccessibleIcon} /> 4</h5>
                <h5>$21</h5>
            </div>
        </>
    );
};

export default DestinateDetails;