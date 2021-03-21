import React, { useEffect, useState } from 'react';
import './Home.css';
import fakeData from '../../fakeData/data.json';
import Card from '../Card/Card';
import backgroundImg from '../../images/Bg.png';

const Home = () => {
    const [vehicles, setVehicles] = useState([]);
    useEffect(() => {
        setVehicles(fakeData);
    }, [])
    return (
            <div class="row">
                <div class="all-cards" style={{backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'bottom', height: '88vh'}}>
                    {
                        vehicles.map(vehicle => <Card vehicle={vehicle} key={vehicle.id}></Card> )
                    }
                </div>
            </div>
    );
};

export default Home;