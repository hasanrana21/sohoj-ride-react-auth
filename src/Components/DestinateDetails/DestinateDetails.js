import React from 'react';
import { useParams } from 'react-router';
import './DestinateDetails.css';
import map from '../../images/Bg.png';
import Car from '../../images/Frame-2.png';
import Bus from '../../images/Frame-1.png';
import Bike from '../../images/Frame.png';
import Train from '../../images/Group.png';
import { useForm } from 'react-hook-form';

const DestinateDetails = (props) => {
    const {firstName} = useParams();
    console.log(props.singleVehicle);
    // const {image} = props.singleVehicle;

    let vehicleImg = "";
    if(firstName === "CAR"){
        vehicleImg = Car;
        const other = "";
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


    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    const handleLocationSubmit = () => {
    }

    return (
        <>
            <div className="row">
                <div className="col-md-5">
                    <form className="locationForm" onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="from">Pick From</label>
                        <br/>
                        <input name="from" placeholder="Location1" ref={register({ required: true })} />
                        <br/>
                        {errors.from && <span >Please put info From Where</span>}
                        <br/>

                        <label htmlFor="to">Pick To</label>
                        <br/>
                        <input name="to" placeholder="Location2"  ref={register({ required: true })} />
                        <br/>
                        {errors.to && <span>Please put info Where to Go</span>}
                        <br/>
                        
                        <input onClick={handleLocationSubmit} type="submit" value="Search" />
                    </form>
                </div>
                <div className="location-map col-md-7">
                    <img src={map} alt=""/>
                </div>
            </div>

            <div class="location-details d-flex">
                    <img src={vehicleImg} alt=""/>
                    <p>{firstName}</p>
            </div>
        </>
    );
};

export default DestinateDetails;