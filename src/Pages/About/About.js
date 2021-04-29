// Dependancy Import
import React from "react";
import { motion } from "framer-motion";

// Component Import
import "./About.css";
import illust from "../../Assets/Images/marshmallows.png";
import githubSvg from "../../Assets/Images/iconmonstr-github-1.svg";
import mailSvg from "../../Assets/Images/iconmonstr-email-4.svg";

const containerAnim = {
    in: {
        opacity: 0,
        x: "-10vw",
    },
    out: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            duration: 1,
        },
    },
    exit: {
        opacity: 0,
        x: "-10vw",
        transition: {
            ease: "easeInOut",
        },
    },
};

const marshmallowsAnim = {
    in: {
        opacity: 0,
    },
    out: {
        opacity: 1,
        transition: {
            delay: 0.7,
            ease: "easeInOut",
        },
    },
    hover: {
        x: -5,
        y: -5,
    },
};

const infoAnim = {
    in: {
        opacity: 0,
        x: "-10vw",
    },
    out: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.7,
            ease: "easeInOut",
        },
    },
};

const iconAnim = {
    out: {
        opacity: 0.5,
        transition: {
            duration: 0.2,
        },
    },
    hover: {
        opacity: 1,
        transition: {
            duration: 0.2,
        },
    },
};

function About() {
    return (
        <motion.div
            className="about"
            variants={containerAnim}
            initial="in"
            animate="out"
            exit="exit"
            id="aboutSection"
        >
            <h1>about</h1>
            <div className="aboutContainer">
                <div className="illustContainer">
                    <motion.img
                        src={illust}
                        alt="Alot of marshmallows"
                        id="marshmallows"
                        variants={marshmallowsAnim}
                        whileHover="hover"
                    />
                    <motion.figcaption variants={marshmallowsAnim}>
                        <i>
                            illust:
                            <span title="She is too shy to share her instagram :P">
                                Amane
                            </span>
                        </i>
                    </motion.figcaption>
                </div>
                <motion.p variants={infoAnim}>
                    Hey! I'm Ng Jing Kai (aka marshmellochoco), a student from
                    Malaysia who is currently pursuing a Software Engineering
                    degree. I am passionate toward Web Development and Mobile
                    Application Development.
                    <br />
                    <br />
                    Feel free to grab my resume
                    <a
                        href="/"
                        title="Not available yet :("
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        here
                    </a>
                    .
                    <br />
                    <br />
                    or find me on:
                    <br />
                    <motion.a
                        href="https://github.com/marshmellochoco"
                        target="_blank"
                        variants={iconAnim}
                        whileHover="hover"
                    >
                        <img
                            src={githubSvg}
                            alt="Github"
                            className="contactIcon"
                        />
                    </motion.a>
                    <motion.a
                        href="mailto:jingkai.ng2@gmail.com"
                        variants={iconAnim}
                        whileHover="hover"
                    >
                        <img
                            src={mailSvg}
                            alt="E-mail"
                            className="contactIcon"
                        />
                    </motion.a>
                </motion.p>
            </div>
        </motion.div>
    );
}

export default About;
