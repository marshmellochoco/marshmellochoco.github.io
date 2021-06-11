import styled from "@emotion/styled";
import React from "react";
import bigLogo from "../images/marshmallow/marshmallow_shadow.png";
import Layout from "./components/Layout";

// styles
const Home = styled.div`
    padding: 10% 0;
    height: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 860px) {
        flex-direction: column;
    }
`;

const BigLogo = styled.img`
    width: 100%;
    max-width: 400px;
    /* max-height: 100%;
    @media (max-width: 860px) {
        height: auto;
        width: 100%;
    } */
`;

const Header = styled.h1`
    padding: 32px 64px;
    width: fit-content;
    height: fit-content;
    border: 2px solid black;
    @media (max-width: 860px) {
        padding: 8% 16%;
    }
`;

// markup
const IndexPage = () => {
    return (
        <Layout>
            <Home>
                <BigLogo src={bigLogo} alt={"big logo"} />
                <Header>
                    Hi, I'm <br />
                    <code>marshmellochoco</code>
                </Header>
            </Home>
        </Layout>
    );
};

export default IndexPage;
