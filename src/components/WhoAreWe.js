import React from "react"
import { Text } from '../containers/language';
import styled from "styled-components"
import Grid from '@mui/material/Grid';
import WAW1 from "../images/WhoAreWe/waw_1.jpg"
import WAW2 from "../images/WhoAreWe/waw_2.jpg"

const WhoAreWeBox = styled.div`
  background: #FFFFFF;
`

const WhoAreWeContent = styled.div`
  width:100%;
  height: 100%;
  padding: 50px 0;
  text-align: center;
  color: white;
  align-items: center;
  align-content: center;
`

const WhoAreWeContainer = styled.div`
  max-width: 90%;
  margin: 90px auto;
`

const Title = styled.h1`
  font-size: 60px;
  color: #000000;

  @media (max-width: 767px) {
    font-size: 30px;
  }
`

const Copy = styled.p`
  font-size: 30px;
  max-width: 50%;
  font-weight: 300;
  margin: 50px auto 70px;
  color: #000000;

  @media (max-width: 768px) {
    font-size: 20px !important;
    max-width: 75%;
    margin: 40px auto;
  }
`

const Image = styled.img`
  background-size: cover;
  height: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const GridContainer = styled(Grid)`
  display: flex;
`

const GridItem = styled(Grid)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px;

  @media (max-width: 767px) {
    padding: 20px !important;
  }
`

const CopyItem = styled.p`
  font-size: 20px;
  color: #000000;

  @media (max-width: 767px) {
    font-size: 1.2rem !important;
    margin: 60px 0;
  }
`

const WhoAreWe = () => {
  return (
    <WhoAreWeBox id="who-are-we">
      <WhoAreWeContent>
        <WhoAreWeContainer>
          <Title>
            <Text tkey="who-are-we" tid="title" />
          </Title>
          <Copy>
            <Text tkey="who-are-we" tid="copy" />
          </Copy>
          <GridContainer container>
            <GridItem container item xs={12} lg={4}>
              <Image src={WAW1} />
              <CopyItem>
                <Text tkey="who-are-we" tid="security" />
              </CopyItem>
            </GridItem>
            <GridItem container item xs={12} lg={4}>
              <Image src={WAW2} />
              <CopyItem>
                <Text tkey="who-are-we" tid="efficiency" />
              </CopyItem>
            </GridItem>
          </GridContainer>
        </WhoAreWeContainer>
      </WhoAreWeContent>
    </WhoAreWeBox>
  )
}

export default WhoAreWe
