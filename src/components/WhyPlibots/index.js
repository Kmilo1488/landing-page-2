import React, { useEffect, useRef } from "react";
import { Container } from "@mui/material";
import Carousel from "./carousel";
import { Text } from '../../containers/language';
import Grid from '@mui/material/Grid';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsersCog, faCogs, faLightbulb } from '@fortawesome/free-solid-svg-icons';

const WhyPlibotsBody = styled.div`
  background-color: #000000;
  color: #A0A0A0;
  padding: 120px 0 0px;
`;

const WhyPlibotsContent = styled(Container)`
  max-width: 90% !important;
  text-align: center;
  align-items: center;
  align-content: center;
`;

const WhyPlibotsTitle = styled.h1`
  font-size: 60px;
  margin: 0;
  @media (max-width: 767px) {
    font-size: 30px;
  }
`;

const Copy = styled.p`
  font-size: 30px;
  max-width: 50%;
  margin: 50px auto 70px;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 20px !important;
    max-width: 75%;
    margin: 40px auto;
  }
`;

const GridItem = styled(Grid)`
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 0 auto;
  padding: 60px 0px 10px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-in-out, transform 0.6s ease-in-out;
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TitleItem = styled.h1`
  font-size: 22px;
`;

const CopyItem = styled.p`
  font-size: 30px;
  font-weight: 300;
  margin: 50px auto 70px;

  @media (max-width: 768px) {
    font-size: 18px !important;
    margin: 20px;
  }
`;

const WhyPlibots = () => {
  const gridItemRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      gridItemRefs.current.forEach((item) => {
        if (item) {
          const rect = item.getBoundingClientRect();
          if (rect.top <= windowHeight * 0.75 && rect.bottom >= windowHeight * 0.25) {
            item.classList.add("visible");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check on mount in case already scrolled
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <WhyPlibotsBody>
      <WhyPlibotsContent>
        <WhyPlibotsTitle>
          <Text tkey="why_plibots" tid="title" />
        </WhyPlibotsTitle>
        <Copy>
          <Text tkey="why_plibots" tid="copy" />
        </Copy>
        <Grid container spacing={3}>
          <GridItem item xs={12} md={4} ref={el => gridItemRefs.current[0] = el}>
            <FontAwesomeIcon icon={faUsersCog} color="white" size="4x" />
            <TitleItem>
              <Text tkey="why_plibots" tid="team-title" />
            </TitleItem>
            <CopyItem>
              <Text tkey="why_plibots" tid="team-copy" />
            </CopyItem>
          </GridItem>
          <GridItem item xs={12} md={4} ref={el => gridItemRefs.current[1] = el}>
            <FontAwesomeIcon icon={faCogs} color="white" size="4x" />
            <TitleItem>
              <Text tkey="why_plibots" tid="customization-title" />
            </TitleItem>
            <CopyItem>
              <Text tkey="why_plibots" tid="customization-copy" />
            </CopyItem>
          </GridItem>
          <GridItem item xs={12} md={4} ref={el => gridItemRefs.current[2] = el}>
            <FontAwesomeIcon icon={faLightbulb} color="white" size="4x" />
            <TitleItem>
              <Text tkey="why_plibots" tid="solutions-title" />
            </TitleItem>
            <CopyItem>
              <Text tkey="why_plibots" tid="solutions-copy" />
            </CopyItem>
          </GridItem>
        </Grid>
        <Copy>
          <Text tkey="why_plibots" tid="copy-2" />
        </Copy>
      </WhyPlibotsContent>
      <Carousel />
    </WhyPlibotsBody>
  );
};

export default WhyPlibots;
