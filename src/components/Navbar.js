import React, {useState} from 'react';
import { NavbarContainer, 
         LeftContainer, 
         RightContainer, 
         NavbarInnerContainer,
         NavbarExtendedContainer,
         NavbarLinkContainer,
         NavbarLink,
         Logo,
         OpenLinksButtons,
         NavbarLinkExtended
} from "../styles/Navbar.style";
import LogoImg from "../assets/Logo.png"




function Navbar() {
    const [extendNavbar, setExtendNavbar] = useState(false);
  return (
      <NavbarContainer extendNavbar={extendNavbar}>
        <NavbarInnerContainer>
          <LeftContainer>
                  <NavbarLinkContainer>
                      <NavbarLink to="/">Home</NavbarLink>
                      <NavbarLink to="/">Cuisines</NavbarLink>
                      <NavbarLink to="/">About Us</NavbarLink>
                      <OpenLinksButtons onClick={() => {
                          setExtendNavbar((curr) => !curr);}}>
                              {extendNavbar ? <>&#10005;</> : <> &#8801; </>}
                      </OpenLinksButtons>
                  </NavbarLinkContainer>
          </LeftContainer>
          <RightContainer>
                  <Logo src={LogoImg}></Logo>
          </RightContainer>
        </NavbarInnerContainer>
        { extendNavbar && (
         <NavbarExtendedContainer>
                  <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
                  <NavbarLinkExtended to="/">Cuisines</NavbarLinkExtended>
                  <NavbarLinkExtended to="/">About Us</NavbarLinkExtended>
         </NavbarExtendedContainer> )
          }
    </NavbarContainer>
  )
}

export default Navbar;