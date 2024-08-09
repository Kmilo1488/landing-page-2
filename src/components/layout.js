import React from "react"
import styled from "styled-components"
import Navbar from "./navbar/navbar"
import Header from "./header"
import WhoAreWe from "./WhoAreWe"
import WhyPlibots from "./WhyPlibots"
import OurPlatform from "./OurPlatform"
import Demos from "./Demos"
import Clients from "./Clients"
import ContactUs from "./ContactUs"
import Footer from "./Footer"

const Body = styled.div`
  font-family: "Poppins", sans-serif;
`

const Layout = () => {
  return (
    <Body>
      <Navbar />
      <Header />
      <WhoAreWe />
      <WhyPlibots />
      <OurPlatform />
      <Demos />
      <Clients />
      <ContactUs />
      <Footer />
    </Body>
  )
}

export default Layout
