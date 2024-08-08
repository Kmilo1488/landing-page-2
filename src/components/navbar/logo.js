import React from "react"
import styled from "styled-components"
import LogoDesktop from "../../images/logo.svg"
import LogoMobile from "../../images/logo_s.svg"

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 36px;

  @media (max-width: 768px) {
    flex: 0 1 25px;
  }
`
const Img = styled.img`
  height: 48px;

  @media (max-width: 768px) {
    display: none;
  }
`

const ImgMobile = styled.img`
  display: none;
  height: 48px;

  @media (max-width: 768px) {
    display: block;
  }
`

const Logo = () => {

  return (
    <LogoWrap>
      <Img src={LogoDesktop} alt="logo" />
      <ImgMobile src={LogoMobile} alt="logo-mobile" />
    </LogoWrap>
  )
}

export default Logo
