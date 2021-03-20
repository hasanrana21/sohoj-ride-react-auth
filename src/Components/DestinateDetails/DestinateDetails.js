import React from 'react';
import { useParams } from 'react-router';
import './DestinateDetails.css';
import Car from '../../images/Frame-2.png';
import Bus from '../../images/Frame-1.png';
import Bike from '../../images/Frame.png';
import Train from '../../images/Group.png';

const DestinateDetails = (props) => {
    const {firstName} = useParams();
    console.log(props.singleVehicle);
    const {  image} = props.singleVehicle;

    let vehicleImg = "";
    // firstName === "CAR" ? vehicleImg = Car : firstName === "BIKE" ? vehicleImg = Bike : firstName === "BUS" ? vehicleImg = Bus: firstName === "TRAIN" ? vehicleImg = "Train"
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
        <div class="location-details">
            <img src={vehicleImg} alt=""/>
            <p>{firstName}</p>
        </div>
    );
};

export default DestinateDetails;