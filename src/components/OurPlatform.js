import React from "react"
import { Text } from '../containers/language';
import ImgBG from '../images/OurPlatform/img.jpg'
import styled from "styled-components"

const OurPlatformBox = styled.div`
  background: #FFFFFF;
`

const OurPlatformContent = styled.div`
  width:100%;
  height: 100%;
  padding: 50px 0;
  text-align: center;
  color: white;
  align-items: center;
  align-content: center;
`

const OurPlatformContainer = styled.div`
  max-width: 90%;
  margin: 90px auto;
`

const Title = styled.h1`
  color: #000000;
  font-size: 60px;

  @media (max-width: 767px) {
    font-size: 30px;
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  overflow: hidden;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(20, 153, 212, 0.5);
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Copy = styled.p`
  color: #FFFFFF;
  font-size: 30px;
  text-shadow: 0 0 5px #000000, 0 0 5px #000000;
  line-height: 2rem;
  font-weight: 900;
  position: absolute;
  bottom: 0%;
  left: 0%;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px !important;
  }
`

const OurPlatform = () => {
  return (
    <OurPlatformBox id="our-platform">
      <OurPlatformContent>
        <OurPlatformContainer>
          <Title>
            <Text tkey="our-platform" tid="title" />
          </Title>
        </OurPlatformContainer>
        <ImageContainer>
          <Image src={ImgBG} alt="our-platform-bg" />
          <ImageOverlay />
          <Copy>
            <Text tkey="our-platform" tid="copy" />
          </Copy>
        </ImageContainer>
      </OurPlatformContent>
    </OurPlatformBox>
  )
}

export default OurPlatform
