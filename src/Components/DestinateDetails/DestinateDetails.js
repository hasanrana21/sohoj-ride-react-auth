import React from 'react';

const DestinateDetails = (props) => {
    console.log(props.singleVehicle);
    const {first_name} = props.singleVehicle;
    return (
        <div>
            <h1>Destinate Details page {first_name}</h1>
        </div>
    );
};

export default DestinateDetails;