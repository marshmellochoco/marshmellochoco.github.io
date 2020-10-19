import React from 'react';
import './Navbar.css';
import icon from '../marshmallow_trans.png';

function Navbar() {
    return (
        <div>
            <ul className="navbar">
                <li id="home"><a href="/#/"><img src={icon} alt="A marshmello" width="100px"></img></a></li>
                <li><a href="/#/about">about</a></li>
                <li><a href="/#/work">work</a></li>
            </ul>
        </div>
    )
}


export default Navbar;