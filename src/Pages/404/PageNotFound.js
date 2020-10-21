// Dependancy Import
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Component Import
import './PageNotFound.css';

const container = {
    hidden: {
      opacity: 0,
      y: "-5vh",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        duration: 1,
      }
    },
    exit: {
      opacity: 0,
      y: "-5vh",
      transition: {
        ease: 'easeInOut',
      }
    }
  };

const PageNotFound = () => {
    return (
        <motion.div className="about"
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h1>Error 404</h1>
            <h2>This page does not exist.</h2>
            <Link to="/">Click here to go back to the homepage</Link>
        </motion.div>
    )
}


export default PageNotFound