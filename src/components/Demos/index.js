import React from "react";
import styled from "styled-components";
import { Text } from '../../containers/language';
import Trainings from "./trainings";

const DemosBox = styled.div`
  background: #FFFFFF;
  text-align: center;
  margin: 20px 0 80px;
`

const Title = styled.h1`
  color: #000000;
  font-size: 60px;

  @media (max-width: 767px) {
    font-size: 30px;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin: 0 10px;
  padding: 20px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Demos = () => {
  const demos = [Trainings];

  return (
    <DemosBox id="demos">
      <Title>
        <Text tkey="demos" tid="title" />
      </Title>

      <Grid>
        {demos.map((DemoComponent, index) => (
          <DemoComponent key={index} />
        ))}
      </Grid>
    </DemosBox>
  );
};

export default Demos;
