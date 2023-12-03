import React from "react";
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./NavbarStyles";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
const Navbar = () => {
  const [navbarVisible, setNavBarVisible] = useState(false);

  return (
    <Nav>
      <Logo to="/home">
        <a>{"<Clarusway/>"} </a>
        <span>recipe</span>
      </Logo>

      <Hamburger onClick={() => setNavBarVisible(!navbarVisible)}>
        <GiHamburgerMenu />
      </Hamburger>

      <Menu navBarState={navbarVisible} onClick={() => setNavBarVisible(false)}>
        <MenuLink to="/about"> about</MenuLink>
        <a href="https://github.com/" target="blank">
          github
        </a>
        <MenuLink to="/">logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
