// Dependancy Import
import React from 'react';
import { motion } from 'framer-motion';

// Component Import
import './About.css';

const containerAnim = {
  hidden: {
    opacity: 0,
    x: "-10vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      duration: 1,
    }
  },
  exit: {
    opacity: 0,
    x: "-10vw",
    transition: {
      ease: 'easeInOut',
    }
  }
};

function About() {
  return (
    <motion.div className="about"
      variants={containerAnim}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1>About</h1>
    </motion.div>
  )
}

export default About;
