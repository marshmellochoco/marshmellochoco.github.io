import React from "react";
import styled from "@emotion/styled";
import Navbar from "./Navbar";

const App = styled.main`
    width: 100vw;
    height: 100vh;
    color: #232129;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const Content = styled.section`
    padding: 16px 20%;
    display: flex;
    flex-direction: column;
    @media (max-width: 1024px) {
        padding: 16px 20%;
    }
    @media (max-width: 425px) {
        padding: 32px;
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
