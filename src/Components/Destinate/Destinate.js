import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/data.json';
import DestinateDetails from '../DestinateDetails/DestinateDetails';

const Destinate = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(()=>{
        setVehicles(fakeData);
    })
    return (
        <div>
                {
                    vehicles.map(singleVehicle => <DestinateDetails singleVehicle={singleVehicle} key={singleVehicle.id}></DestinateDetails>)
                }
        </div>
    );
};

export default Destinate;