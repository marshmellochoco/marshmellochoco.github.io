// Dependancy Import
import React from 'react';
import { Link } from 'react-router-dom';

// Component Import
import './Navbar.css';
import icon from '../marshmallow_trans.png';

function Navbar() {
    return (
        <ul className="navbar">
            <li id="home"><Link to="/"><img src={icon} alt="A marshmello" width="100px"></img></Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/work">work</Link></li>
        </ul>
    )
}


export default Navbar;