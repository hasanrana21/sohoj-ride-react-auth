import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import fakeData from '../../fakeData/data.json';
import DestinateDetails from '../DestinateDetails/DestinateDetails';
import map from '../../images/Bg.png';
import './Destinate.css';

const Destinate = () => {
    const [vehicles, setVehicles] = useState([]);
    const [searchResult, setSearchResult] = useState(false);

    useEffect(()=>{
        setVehicles(fakeData);
    }, [])
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    
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
                        <br/>
                        <label htmlFor="to">Pick To</label>
                        <br/>
                        <input name="to" placeholder="Location2"  ref={register({ required: true })} />
                        <br/>
                        {errors.to && <span>Please put info Where to Go</span>}
                        <br/>
                        
                        <input type="submit" onClick={()=> setSearchResult(!searchResult)} value="Search" />
                    </form>

                    <div className="destinate-details-result">
                        {
                            searchResult && vehicles.map(singleVehicle => <DestinateDetails singleVehicle={singleVehicle} key={singleVehicle.id}></DestinateDetails>)
                        }
                    </div>
                </div>
                <div class="location-map col-md-8">
                    <img src={map} alt=""/>
                </div>
            </div>
            
        </>
    );
};

export default Destinate;