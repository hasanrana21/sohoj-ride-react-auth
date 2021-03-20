import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/data.json';
import DestinateDetails from '../DestinateDetails/DestinateDetails';

const Destinate = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(()=>{
        setVehicles(fakeData);
    })
    return (
        <div class="row">
            <div class="col-md-5">
                {
                    vehicles.map(singleVehicle => <DestinateDetails singleVehicle={singleVehicle}></DestinateDetails>)
                }
            </div>
            <div className="col-md-7">
                
            </div>
        </div>
    );
};

export default Destinate;