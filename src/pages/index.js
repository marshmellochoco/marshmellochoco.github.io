import styled from "@emotion/styled";
import React from "react";
import bigLogo from "../images/marshmallow/marshmallow_shadow.png";
import Layout from "./components/Layout";

// styles
const Home = styled.div`
    padding: 64px 0;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (max-width: 860px) {
        flex-direction: column;
    }
`;

const LogoContainer = styled.div`
    width: fit-content;
`;

const BigLogo = styled.img`
    width: 80%;
    max-height: 100%;
    @media (max-width: 860px) {
        height: auto;
        width: 100%;
    }
`;

const Header = styled.h1`
    padding: 32px 64px;
    width: fit-content;
    height: fit-content;
    border: 2px solid black;
`;

// markup
const IndexPage = () => {
    return (
        <Layout>
            <Home>
                <LogoContainer>
                    <BigLogo src={bigLogo} alt={"big logo"} />
                </LogoContainer>
                <Header>
                    Hi, I'm <br />
                    <code>marshmellochoco</code>
                </Header>
            </Home>
        </Layout>
    );
};

export default IndexPage;
