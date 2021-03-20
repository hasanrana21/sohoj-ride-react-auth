import React, { useEffect, useState } from 'react';
// import Header from '../Header/Header';
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
            <div class="all-cards" style={{backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'bottom'}}>
                {
                    vehicles.map(vehicle => <Card vehicle={vehicle} key={vehicle.id}></Card> )
                }
            </div>
    );
};

export default Home;