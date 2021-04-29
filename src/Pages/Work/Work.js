// Dependancy Import
import React from "react";

import w11 from "../../Assets/Images/Work1/Title.png";
import w12 from "../../Assets/Images/Work1/screen1.png";
import w13 from "../../Assets/Images/Work1/screen2.png";

// Component Import
import "./Work.css";

function Work() {
    return (
        <div className="cards-container" id="workSection">
            <h1>work</h1>
            <div className="work">
                <h2>Fright Night</h2>
                <div className="image-list">
                    <img alt="Fright Night Title" src={w11} />
                    <img alt="Fright Night Screenshot 1" src={w12} />
                    <img alt="Fright Night Screenshot 2" src={w13} />
                </div>
            </div>
            <div className="work">
                <h2>music-choco</h2>
                <div className="image-list">
                    WIP but you can find the GitHub repo&nbsp;<a href="https://github.com/marshmellochoco/music-choco">here</a>
                </div>
            </div>
        </div>
    );
}

export default Work;
