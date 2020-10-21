// Dependancy Import
import React from 'react';
import { Link } from 'react-router-dom';

// Component Import
import './Navbar.css';
import icon from '../marshmallow_trans.png';

function Navbar() {
    return (
        <nav>
            <Link to="/"><img src={icon} alt="A marshmello" width="100px" id="home" /></Link>
            <ul>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/work">work</Link></li>
            </ul>
        </nav>
    )
}


export default Navbar;