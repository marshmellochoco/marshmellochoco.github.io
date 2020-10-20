import React from 'react';
import './Home.css';
import icon from '../Components/marshmallow_shadow.png';

function Home() {

  return (
    <div className="home" >
      <img src={icon} alt="A Big Marshmallow" width="30%"></img>
      <h1 id="marshchoco">
        <span></span>Hi, I am<br />
        <a id="name" href="https://marshmellochoco.github.io"><b>marshmellochoco</b></a>
      </h1>
      <div className="balls" onClick={e => handleClick()}>
        <button className="ball" id="ball1"></button>
        <button className="ball" id="ball2"></button>
        <button className="ball" id="ball3"></button>
      </div>
    </div>
  )

}

function handleClick() {
  alert("Trololol! This button is not going to change the color or something.");
}

export default Home;