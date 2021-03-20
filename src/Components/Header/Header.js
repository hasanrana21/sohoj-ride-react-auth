import React from 'react';
import './Header.css';
// import logo from '../../images/Urban Riders.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header container-fluid">
            <nav class="row">
                <div className="logo" class="logo text-center col-md-5">
                    <h2>Sohoj Ride</h2>
                </div>
                <div class="col-md-7 text-center">
                    <Link to="/home">Home</Link>
                    <Link to="/destinate">Destinate</Link>
                    <Link to="/login">Login</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;