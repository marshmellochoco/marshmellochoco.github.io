// Dependancy Import
import React from 'react';
import {motion} from 'framer-motion';

import Work1_Title from '../../Assets/Images/Work1/Title.png'
import Work1_1 from '../../Assets/Images/Work1/screen1.png'
import Work1_2 from '../../Assets/Images/Work1/screen2.png'

// Component Import
import './Work.css';

const containerAnim = { in: {
        opacity: 0,
        x: "-10vw"
    },
    out: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            duration: 1
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

const ulAnim = {
    out: {
        transition: {
            delayChildren: 0.7,
            staggerChildren: 0.2,
            ease: 'easeInOut'
        }
    }
}

const CardAnim = { in: {
        opacity: 0
    },
    out: {
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 1
        }
    }
}

function Work() {
    return (
        <div className='cards-container'>
            <img src={Work1_Title}/>
            <img src={Work1_1}/>
        </div>
    )
}

export default Work;
