import styled from "styled-components";
import { Link, link } from "react-router-dom";

export const NavbarContainer = styled.nav`

    width: 100%;
    height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
    background-color: #214451;
    display: flex;
    flex-direction: column;
    border-radius: 5px;

    @media (min-width: 700px) {
        height: 80px;
    }

`

export const LeftContainer = styled.div`

    flex: 70%;
    display: flex;
    align-items: center;
    padding-left: 5%;
    

`;


export const RightContainer = styled.div`

    flex: 30%;
    display: flex;
    justify-content:flex-end;
    align-items: center;
    padding-right: 50px;
    

`;

export const NavbarInnerContainer = styled.div`

    width: 100%;
    height: 80px;
    display: flex;

`;

export const NavbarLinkContainer = styled.div`

    display: flex;

`;

export const NavbarLink = styled(Link)`

    color: rgb(184, 209, 207);
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;

    @media (max-width: 700px) {
        display: none;
    }

`;
export const NavbarLinkExtended = styled(Link)`

    color: rgb(184, 209, 207);
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;

`;

export const Logo = styled.img`

    margin: 10px;
    max-width: 180px;
    height:auto;
    width:80px;
    height:80px;

`;

export const OpenLinksButtons = styled.button`

    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: white;
    font-size: 45px;
    cursor: pointer;

    @media (min-width: 700px) {
        display: none;
    }

`;

export const NavbarExtendedContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 700px) {
        display: none;
    }

`;