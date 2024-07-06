import React, { useState, useEffect } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

const CarouselSlider = (props) => {
  const [offsetRadius, setOffsetRadius] = useState(3);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
    setCards(
      props.cards.map((element, index) => ({
        ...element,
        onClick: () => setGoToSlide(index),
      }))
    );
  }, [props.offset, props.showArrows, props.cards]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setGoToSlide((prevIndex) => (prevIndex + 1) % cards.length);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [cards, isPaused]);

  useEffect(() => {
    setCurrentIndex(goToSlide);
  }, [goToSlide]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <Container
      style={{ width: props.width, height: props.height }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <StyledCarousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
        currentIndex={currentIndex}
        arrowOffset={20} // Adjust the offset here to increase the gap between arrows
      />
    </Container>
  );
};

export default CarouselSlider;

const Container = styled.div`
  width: 100%;
  overflow: visible;
`;

const StyledCarousel = styled(Carousel)`
  .navigationWrapper {
    .navigation {
      .leftControl,
      .rightControl {
        margin: 0 100px; // Increase this margin to increase the gap between arrows
      }
    }
  }
`;
