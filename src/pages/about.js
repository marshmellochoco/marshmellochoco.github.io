import React from "react";
import styled from "@emotion/styled";
import Layout from "./components/Layout";
import marshmallows from "../images/marshmallow/marshmallows.png";
import githubIcon from "../images/github.svg";
import twitterIcon from "../images/twitter.svg";
import mailIcon from "../images/email.svg";
import { Link } from "gatsby";

const About = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    line-height: 1.6em;
    text-align: justify;
    @media (max-width: 768px) {
        display: block;
    }
`;

const Marshmello = styled.div`
    width: fit-content;
    margin-left: 36px;
    @media (max-width: 768px) {
        margin: auto;
    }
`;

const MarshmelloImage = styled.img`
    border: 1px solid grey;
    width: 100%;
`;

const Description = styled.section`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const ButtonList = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 16px;
`;

const IconButton = styled((props) => <Link {...props} />)`
    width: 160px;
    color: #232129;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 1px 2px 0 #c5c5c5;
    padding: 4px 0;
    &:hover {
        box-shadow: 0 2px 4px 0 #c5c5c5;
    }
`;

const IconText = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
`;

const Icon = styled.img`
    width: 32px;
    margin: 8px;
`;

const AboutPage = () => {
    return (
        <Layout>
            <h1>about</h1>
            <About>
                <Marshmello>
                    <MarshmelloImage src={marshmallows} />
                </Marshmello>
                <Description>
                    <p>
                        Hey! I'm Ng Jing Kai (aka marshmellochoco), a student
                        from Malaysia who is currently pursuing a Software
                        Engineering degree. I am passionate toward Web
                        Development and Mobile Application Development.
                    </p>
                    <ButtonList>
                        <IconButton to="https://github.com/marshmellochoco">
                            <Icon src={githubIcon} />
                            <IconText>Github</IconText>
                        </IconButton>
                        <IconButton to="https://twitter.com/marshchoco01">
                            <Icon src={twitterIcon} />
                            <IconText>Twitter</IconText>
                        </IconButton>
                        <IconButton to="https://twitter.com/marshchoco01">
                            <Icon src={mailIcon} />
                            <IconText>Mail</IconText>
                        </IconButton>
                    </ButtonList>
                </Description>
            </About>
        </Layout>
    );
};

export default AboutPage;
