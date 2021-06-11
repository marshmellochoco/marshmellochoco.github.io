import React from "react";
import styled from "@emotion/styled";
import Layout from "./components/Layout";
import marshmallows from "../images/marshmallow/marshmallows.png";
import githubIcon from "../images/github.svg";
import twitterIcon from "../images/twitter.svg";
import mailIcon from "../images/email.svg";
import { Link } from "gatsby";

const Marshmello = styled.img`
    max-width: 512px;
    margin: auto;
    @media (max-width: 860px) {
        width: 100%;
    }
`;

const ButtonList = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const Description = styled.section``;

const IconButton = styled((props) => <Link {...props} />)`
    width: 160px;
    color: #232129;
    text-decoration: none;
    display: flex;
    justify-content: center;
`;

const Icon = styled.img`
    width: 32px;
    margin: 8px;
`;

const AboutPage = () => {
    return (
        <Layout>
            <h1>about</h1>
            <Marshmello src={marshmallows} />
            <caption>illust: Amane</caption>
            <Description>
                <p>
                    Hey! I'm Ng Jing Kai (aka marshmellochoco), a student from
                    Malaysia who is currently pursuing a Software Engineering
                    degree. I am passionate toward Web Development and Mobile
                    Application Development.
                </p>
                <ButtonList>
                    <IconButton to="https://github.com/marshmellochoco">
                        <Icon src={githubIcon} />
                        <p>Github</p>
                    </IconButton>
                    <IconButton to="https://twitter.com/marshchoco01">
                        <Icon src={twitterIcon} />
                        <p>Twitter</p>
                    </IconButton>
                    <IconButton to="https://twitter.com/marshchoco01">
                        <Icon src={mailIcon} />
                        <p>Mail</p>
                    </IconButton>
                </ButtonList>
            </Description>
        </Layout>
    );
};

export default AboutPage;
