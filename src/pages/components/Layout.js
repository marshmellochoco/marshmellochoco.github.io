import React from 'react';
import styled from '@emotion/styled';
import Navbar from './Navbar';

const App = styled.main`
    padding-bottom: 2em;
    color: #232129;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Content = styled.section`
    margin: 0 auto;
    width: var(--width-xl);
    @media (max-width: 1280px) {
        width: var(--width-lg);
    }
    @media (max-width: 768px) {
        width: auto;
        margin: 0 64px;
    }
    @media (max-width: 425px) {
        margin: 0 16px;
    }
`;

const Layout = ({ children }) => {
    return (
        <App>
            <title>marshchoco</title>
            <Navbar />
            <Content>{children}</Content>
        </App>
    );
};

export default Layout;
