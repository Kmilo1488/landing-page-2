import React, { useState } from "react";
import styled from "styled-components";
import { Text } from '../../containers/language';
import ReactPlayer from 'react-player';

const CardContainer = styled.div`
  padding: 20px;
  border-radius: 5px;
  min-height: 128px;
  background-color: #FFFFFF;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const CardHeader = styled.div`
  text-align: center;
`;

const CardTitle = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const CardContent = styled.div`
  margin-top: 20px;
`;

const YoutubeWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  background: black;
  margin-top: 20px;

  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Card = ({ title, details, videoUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <CardContainer onClick={handleCardClick}>
      <CardHeader>
        <CardTitle>
          <Text tkey="demos" tid={title} />
        </CardTitle>
      </CardHeader>
      {isExpanded && (
        <CardContent>
          <Text tkey="demos" tid={details} />
          <YoutubeWrapper>
            <ReactPlayer
              url={videoUrl}
              width="100%"
              height="100%"
            />
          </YoutubeWrapper>
        </CardContent>
      )}
    </CardContainer>
  );
};

export default Card;
