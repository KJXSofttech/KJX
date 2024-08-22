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
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,  // Disable arrows on mobile
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
      link: "https://junkbazar.com/",
    },
    {
      key: uuidv4(),
      image: RailkafeImage,
      link: "https://railkafe.com/",
    },
    {
      key: uuidv4(),
      image: "https://i.ibb.co/w0mP8kT/project1.png",
      link: "https://www.travoticholidays.com/",
    },
    {
      key: uuidv4(),
      image: "https://i.ibb.co/9YJNzqC/project5.png",
      link: "https://timesmedia.co.in/ec/public/",
    },
    {
      key: uuidv4(),
      image: "https://i.ibb.co/9G3LyrC/project7.png",
      link: "https://jobseekers.co.nz/",
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
                onClick={() => window.open(card.link, "_blank")}
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
  padding: 0 20px; /* Padding for arrows */
  @media (max-width: 768px) {
   width: 170%;
   margin-left: -70px;
   height: 150%;
   box-sizing: border-box;
    }

  /* Ensure container doesn't cause vertical scrolling */
  box-sizing: border-box;
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
  position: relative;
  padding: 0 75px;

  .slick-slide {
    margin: 0;
  }

  .slick-prev,
  .slick-next {
    font-size: 60px;
    line-height: 1;
    color: transparent;
    z-index: 2;
    background: transparent;
    border: none;
    cursor: pointer;
    width: 70px;
    height: 40px;
  }

  .slick-prev {
    left: -80px;
  }

  .slick-next {
    right: -80px;
  }

  .slick-prev:before,
  .slick-next:before {
    display: none;
  }

  @media (max-width: 1024px) {
    padding: 0 15px;
  }

  @media (max-width: 768px) {
    padding: 0 10px;

    /* Hide arrows on mobile */
    .slick-prev,
    .slick-next {
      display: none;
    }
  }
`;

const SliderCard = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 5px; /* Add margin for gaps */
`;

const CardContainer = styled.div`
  position: relative;
  width: calc(100% - 20px); /* Full width with gaps */
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
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
  left: 0;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  
  img {
    width: 60px;
    height: 40px;
  }

  @media (max-width: 768px) {
    display: none; /* Hide on mobile */
  }
`;

const NextArrow = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;

  img {
    width: 60px;
    height: 40px;
  }

  @media (max-width: 768px) {
    display: none; /* Hide on mobile */
  }
`;

export default ImageSlider;
