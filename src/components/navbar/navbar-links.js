import React from "react"
import styled from "styled-components"
import LanguageSelector from '../language-selector';
import { Text } from "../../containers/language"

const NavItem = styled.a`
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 8px;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: linear-gradient(90deg, rgba(236,41,41,1) 0%, rgba(83,1,1,1) 100%);
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    background: linear-gradient(90deg, rgba(236,41,41,1) 0%, rgba(83,1,1,1) 100%);
    color:transparent;
    -webkit-background-clip: text;
    background-clip: text;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

const NavHome = styled(NavItem)`
  color: #F2211D;
  font-weight: bold;
`

const NavbarLinks = (props) => {

  const { handleClick } = props

  return (
    <>
      <NavHome onClick={handleClick} href="#who-are-we">
        <Text tkey={"menu"} tid="who_are_we" />
      </NavHome>
      <NavItem onClick={handleClick} href="#why-plibots">
        <Text tkey="menu" tid="why_plibots" />
      </NavItem>
      <NavItem onClick={handleClick} href="#our-platform">
        <Text tkey="menu" tid="our_platform" />
      </NavItem>
      <NavItem onClick={handleClick} href="#demos">
        <Text tkey="menu" tid="demos" />
      </NavItem>
      <NavItem onClick={handleClick} href="#clients">
        <Text tkey="menu" tid="clients" />
      </NavItem>
      <NavItem onClick={handleClick} href="#contact-us">
        <Text tkey="menu" tid="contact_us" />
      </NavItem>
      <LanguageSelector />
    </>
  )
}

export default NavbarLinks
