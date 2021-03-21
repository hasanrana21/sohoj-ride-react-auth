import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import fakeData from '../../fakeData/data.json';
import DestinateDetails from '../DestinateDetails/DestinateDetails';
// import mapImg from '../../images/Map.png';
import './Destinate.css';
import Map from '../Map/Map';

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
                        {errors.from && <span class="error">Please put info From Where</span>}
                        <br/>
                        <label htmlFor="to">Pick To</label>
                        <br/>
                        <input name="to" placeholder="Location2"  ref={register({ required: true })} />
                        <br/>
                        {errors.to && <span class="error">Please put info Where to Go</span>}
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
                    {/* <img src={mapImg} alt=""/> */}
                    {/* <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDfv9aQI58KZaGfyckjpYAfve80GTLF3xU&callback=initMap"
                    type="text/javascript"></script> */}
                    <Map></Map>
                </div>
            </div>
            
        </>
    );
};

export default Destinate;