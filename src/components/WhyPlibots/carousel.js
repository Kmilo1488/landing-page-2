import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { Text } from '../../containers/language';
import image1 from '../../images/WhyPlibots/1.jpg';
import image2 from '../../images/WhyPlibots/2.jpg';
import image3 from '../../images/WhyPlibots/3.jpg';
import image4 from '../../images/WhyPlibots/4.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 1s ease-in-out, transform 1s ease-in-out;
  filter: ${props => (props.$isBlurred ? 'blur(8px)' : 'blur(0px)')};
  transform: ${props => (props.$isBlurred ? 'scale(1.05)' : 'scale(1)')};
`;

const Copy = styled.p`
  font-size: 60px;
  line-height: 2rem;
  font-weight: 900;
  text-shadow: 0 0 3px #000000, 0 0 5px #000000;
  width: 100%;
  margin: 0 10px;
  font-weight: 300;
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${props => (props.$showText ? '1' : '0')};
  transition: opacity 1s ease-in-out;
  color: white;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px !important;
    max-width: 80%;
    padding: 15px;
  }

  @media (max-width: 480px) {
    font-size: 18px !important;
    max-width: 90%;
    padding: 10px;
  }
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 110%;
  height: 110%;
  background: transparent;
  backdrop-filter: ${props => (props.$isBlurred ? 'blur(8px)' : 'blur(0)')};
  transition: backdrop-filter 1s ease-in-out;
  display: ${props => (props.$isBlurred ? 'initial' : 'none')};
`;

const ImageWithBlur = ({ index, src, alt, isBlurred, showText }) => (
  <ImageContainer>
    <Backdrop $isBlurred={isBlurred} />
    <StyledImage src={src} alt={alt} $isBlurred={isBlurred} />
    <Copy $showText={showText}>
      <Text tkey="why_plibots" tid={`copy-image-${index + 1}`} />
    </Copy>
  </ImageContainer>
);

const CarouselBody = styled.div`
  background-color: white;
`;

const Carousel = () => {
  const [blurredImageIndex, setBlurredImageIndex] = useState(null);
  const [showTextIndex, setShowTextIndex] = useState(null);

  const handleAfterChange = (current) => {
    setBlurredImageIndex(current);
    setShowTextIndex(null);

    setTimeout(() => {
      setShowTextIndex(current);
    }, 1000);
  };

  const settings = {
    arrows: false,
    fade: true,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 5000,
    afterChange: handleAfterChange,
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setBlurredImageIndex(prevIndex => (prevIndex !== null ? prevIndex : 0));
      setShowTextIndex(prevIndex => (prevIndex !== null ? prevIndex : 0));
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const images = [image1, image2, image3, image4];

  return (
    <CarouselBody>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <ImageWithBlur
              index={index}
              src={image}
              alt={`image${index + 1}`}
              isBlurred={index === blurredImageIndex}
              showText={index === showTextIndex}
            />
          </div>
        ))}
      </Slider>
    </CarouselBody>
  );
};

export default Carousel;
