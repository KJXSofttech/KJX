import React from "react";
import { v4 as uuidv4 } from "uuid";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import JunkImage from "./Junk_image.webp";
import RailkafeImage from "./Railkafe_image.webp";
import PrevArrowImg from "../../../../assets/right.png";
import NextArrowImg from "../../../../assets/left.png";

// Main component
const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
    prevArrow: (
      <PrevArrow>
        <img src={PrevArrowImg} alt="Previous" />
      </PrevArrow>
    ),
    nextArrow: (
      <NextArrow>
        <img src={NextArrowImg} alt="Next" />
      </NextArrow>
    ),
  };

  const cards = [
    {
      key: uuidv4(),
      image: JunkImage,
      onClick: "https://junkbazar.com/",
    },
    {
      key: uuidv4(),
      image: RailkafeImage,
      onClick: "https://railkafe.com/",
    },
    
  ];

  return (
    <Container>
      <StyledSlider {...settings}>
        {cards.map((card) => (
          <SliderCard key={card.key}>
            <CardContainer>
              <CardImage
                src={card.image}
                alt=""
                className={card.key === cards[1].key ? "crop-second" : ""}
                onClick={() => window.open(card.onClick, "_blank")}
              />
              <Overlay>
                <OverlayText>View Details</OverlayText>
              </Overlay>
            </CardContainer>
          </SliderCard>
        ))}
      </StyledSlider>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  padding: 0 20px; /* Add padding to ensure arrows are outside of the slider */
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  max-width: 1200px; /* Adjust to your desired max width */
  box-sizing: border-box; /* Prevent overflow caused by padding */
  position: relative;
  padding: 0 75px; /* Add padding to ensure content is cropped before arrows */

  .slick-slide {
    margin: 0; /* Ensure no extra margin */
  }

  .slick-prev,
  .slick-next {
    font-size: 60px;
    line-height: 1;
    color: transparent;
    z-index: 2; /* Ensure arrows are above the slides */
    background: transparent;
    border: none;
    cursor: pointer;
    width: 70px;
    height: 40px;
  }

  .slick-prev {
    left: -80px; /* Adjust the position outside the slider */
  }

  .slick-next {
    right: -80px; /* Adjust the position outside the slider */
  }

  .slick-prev:before,
  .slick-next:before {
    display: none;
  }

  /* Responsive styles */
  @media (max-width: 1024px) {
    padding: 0 15px; /* Adjust padding for tablets */
  }

  @media (max-width: 768px) {
    padding: 0 10px; /* Adjust padding for mobile */
  }
`;

const SliderCard = styled.div`
  display: flex;
  justify-content: center;
`;

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%; /* Ensure the container takes up full height available */
  overflow: hidden; /* Hide any content that overflows */
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  &.crop-second {
    object-fit: cover;
    height: 100%; /* Ensure image fills the container */
    width: 100%; /* Ensure image fits within container */
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  border-radius: 8px;

  ${CardImage}:hover & {
    opacity: 1;
  }
`;

const OverlayText = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

const PrevArrow = styled.button`
  position: absolute;
  top: 50%;
  left: 0; /* Align with the edge of the container */
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  
  img {
    width: 60px; /* Adjust arrow size */
    height: 40px;
  }
          @media (max-width: 768px) {
    margin-left: 59px; /* Add margin for mobile view */
        width: 20px; /* Adjust arrow size */
    height: 20px;
  }
`;

const NextArrow = styled.button`
  position: absolute;
  top: 50%;
  right: 0; /* Align with the edge of the container */
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;

  img {
    width: 60px; /* Adjust arrow size */
    height: 40px;
  }
      @media (max-width: 768px) {
    margin-right: 45px; /* Add margin for mobile view */
            width: 20px; /* Adjust arrow size */
    height: 20px;
  }
`;

export default ImageSlider;
