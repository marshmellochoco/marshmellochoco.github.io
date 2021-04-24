// Dependancy Import
import React from 'react';
import {motion} from 'framer-motion';

// Component Import
import './Home.css';
import icon from '../../Assets/Images/marshmallow_shadow.png';

const containerAnim = { in: {
        opacity: 0,
        x: 0
    },
    out: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            duration: 0
        }
    },
    exit: {
        opacity: 0,
        x: "-10vw",
        transition: {
            ease: 'easeInOut'
        }
    }
};

const iconAnim = { in: {
        x: "-10%",
        opacity: 0
    },
    out: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1
        }
    }
};

const titleAnim = { in: {
        x: "10%",
        opacity: 0
    },
    out: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.8,
            duration: 0.7
        }
    }
}

function Home() {

    return (
        <motion.div
            className="home"
            variants={containerAnim}
            initial="in"
            animate="out"
            exit="exit">
            <motion.img variants={iconAnim} src={icon} alt="A Big Marshmallow"/>
            <div className='right'>
                <motion.h1 variants={titleAnim}>
                    <div id="marshchoco">
                        <div>Hi, I am<br/></div>
                        <a id="name" href="https://marshmellochoco.github.io">
                            <b>marshmellochoco</b>
                        </a>
                    </div>
                </motion.h1>
                <div className="balls" onClick={e => handleClick()}>
                    <button className="ball" id="ball1"></button>
                    <button className="ball" id="ball2"></button>
                    <button className="ball" id="ball3"></button>
                </div>
            </div>
        </motion.div>
    )

}

function handleClick() {
    alert("Nope, this button is not going to change the color or something.");
}

export default Home;