import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const Nav = styled.nav`
    margin: 32px auto;
    background: transparent;
    width: var(--width-xl);
    @media (max-width: 1280px) {
        width: var(--width-lg);
    }
    @media (max-width: 768px) {
        width: auto;
        margin: 32px 64px;
    }
    @media (max-width: 425px) {
        margin: 32px 16px;
    }
`;

const NavItems = styled.div`
    max-width: 360px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: auto;
    text-align: center;
`;

const NavLink = styled((props) => <Link {...props} />)`
    max-width: 120px;
    color: #232129;
    text-decoration: none;
    &:hover {
        color: #939199;
    }
`;

const Navbar = () => {
    return (
        <Nav>
            <NavItems>
                <NavLink to="/">home</NavLink>
                <NavLink to="/work">work</NavLink>
                <NavLink to="/about">about</NavLink>
            </NavItems>
        </Nav>
    );
};

export default Navbar;
