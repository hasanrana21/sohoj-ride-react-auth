import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import fakeData from '../../fakeData/data.json';
import DestinateDetails from '../DestinateDetails/DestinateDetails';
import map from '../../images/Bg.png';
import './Destinate.css';

const Destinate = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(()=>{
        setVehicles(fakeData);
    }, [])
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    const handleLocationSubmit = () => {
        
    }
    return (
        <>
            <div class="row container-fluid search-field">
                <div class="col-md-4">
                    <form class="locationForm" onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="from">Pick From</label>
                        <br/>
                        <input name="from" placeholder="Location1" ref={register({ required: true })} />
                        <br/>
                        {errors.from && <span >Please put info From Where</span>}
                        <label htmlFor="to">Pick To</label>
                        <br/>
                        <input name="to" placeholder="Location2"  ref={register({ required: true })} />
                        <br/>
                        {errors.to && <span>Please put info Where to Go</span>}
                        <br/>
                        
                        <input onClick={handleLocationSubmit} type="submit" value="Search" />
                    </form>
                </div>
                <div class="location-map col-md-8">
                    <img src={map} alt=""/>
                </div>
            </div>
            <div className="destinate-details-map">
            {
                vehicles.map(singleVehicle => <DestinateDetails singleVehicle={singleVehicle} key={singleVehicle.id}></DestinateDetails>)
            }
            </div>
        </>
    );
};

export default Destinate;