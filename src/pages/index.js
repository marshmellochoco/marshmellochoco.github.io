import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import bigLogo from '../images/marshmallow/marshmallow_shadow.png';
import Layout from './components/Layout';

// styles
const Home = styled.div`
    padding: 10% 0;
    height: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 24px;
    }
`;

const BigLogo = styled.img`
    width: 400px;
    height: 456px;
    @media (max-width: 768px) {
        width: 300px;
        height: 342px;
    }
`;

const Header = styled.h1`
    padding: 32px 64px;
    width: fit-content;
    height: fit-content;
    border: 2px solid black;
    @media (max-width: 768px) {
        padding: 8% 16%;
    }
`;

const Hidden = styled((props) => <Link {...props} />)`
    position: fixed;
    bottom: 8px;
    right: 8px;
    color: white;
    cursor: default;
    text-decoration: none;
    &:hover {
        color: #ddd;
    }
`;

// markup
const IndexPage = () => {
    return (
        <Layout>
            <Home>
                <BigLogo src={bigLogo} alt={'big logo'} />
                <Header>
                    Hi, I'm <br />
                    <code>marshmellochoco</code>
                </Header>
            </Home>
            <Hidden to='my-watch-list' aria-hidden='true'>
                Whaaaat
            </Hidden>
        </Layout>
    );
};

export default IndexPage;
