import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import logo from "../../images/marshmallow/marshmallow_trans.png";

const Nav = styled.nav`
    width: auto;
    padding: 32px 20%;
    display: flex;
    justify-content: space-between;
    background: transparent;
    @media (max-width: 1024px) {
        padding: 32px 20%;
    }
    @media (max-width: 425px) {
        padding: 32px;
    }
`;

const NavIcon = styled.img`
    width: 64px;
    height: 64px;
`;

const NavItems = styled.div`
    display: flex;
    height: 64px;
    width: 288px;
    align-content: center;
    justify-content: space-between;
`;

const NavLink = styled((props) => <Link {...props} />)`
    max-width: 96px;
    margin: auto 0 auto auto;
    color: #232129;
    text-decoration: none;
    &:hover {
        color: #939199;
    }
`;

const Navbar = () => {
    return (
        <Nav>
            <NavIcon src={logo} alt="something" />
            <NavItems>
                <NavLink to="/">home</NavLink>
                <NavLink to="/work">work</NavLink>
                <NavLink to="/about">about</NavLink>
            </NavItems>
        </Nav>
    );
};

export default Navbar;
