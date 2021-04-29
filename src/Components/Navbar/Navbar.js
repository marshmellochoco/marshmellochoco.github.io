// Dependancy Import
import React from "react";

// Component Import
import "./Navbar.css";
import icon from "../../Assets/Images/marshmallow_trans.png";

function Navbar() {
    return (
        <nav id="topSection">
            <a href="#topSection">
                <img src={icon} alt="A marshmello" width="100px" id="home" />
            </a>
            <ul>
                <li>
                    <a href="#aboutSection">about</a>
                </li>
                <li>
                    <a href="#workSection">work</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
