import React from "react";
import styled from "styled-components";
import { Text } from '../containers/language';
import BG from '../images/Header/bg.png';
import Client1 from "../images/Clients/1.png";
import Client2 from "../images/Clients/2.png";
import Client3 from "../images/Clients/3.png";
import Client4 from "../images/Clients/4.png";
import Client5 from "../images/Clients/5.png";
import Client6 from "../images/Clients/6.svg";
import Client7 from "../images/Clients/7.png";
import Client8 from "../images/Clients/8.png";

const ClientsBody = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  text-align: center;
  color: #A0A0A0;
  padding: 60px 0;
`;

const BackgroundImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Ensure overlay and image are behind other elements */
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(20, 153, 212, 0.6);
`;

const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 80px;

  @media (max-width: 767px) {
    font-size: 30px;
  }
`;

const Copy = styled.p`
  color: #FFFFFF;
  font-size: 30px;
  line-height: 2rem;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const ClientsItems = styled.div`
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 60px;
`;

const ClientContent = styled.div`
  display: flex;
  overflow-x: auto;
  align-items: center;
  justify-content: space-around;
  margin: 0 10px;

  @media (max-width: 1280px) {
    justify-content: flex-start;
  }
`;

const ClientItem = styled.div`
  margin: 0 15px;
`;

const ClientImage = styled.img`
  height: 60px;
`;

const clients = [Client1, Client2, Client3, Client4, Client5, Client6, Client7, Client8]

const Clients = () => (
  <ClientsBody>
    <BackgroundImageContainer>
      <BackgroundImage src={BG} alt="our-platform-bg" />
      <ImageOverlay />
    </BackgroundImageContainer>
    <Title>
      <Text tkey="clients" tid="title" />
    </Title>
    <Copy>
      <Text tkey="clients" tid="copy" />
    </Copy>
    <ClientsItems>
      <ClientContent>
        {clients.map((client, index) => (
          <ClientItem key={index}>
            <ClientImage src={client} alt={`client-${index}`} />
          </ClientItem>
        ))}
      </ClientContent>
    </ClientsItems>
  </ClientsBody>
);

export default Clients;
