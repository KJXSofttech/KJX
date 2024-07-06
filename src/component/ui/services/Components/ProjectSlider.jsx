import React from "react";
import { v4 as uuidv4 } from "uuid";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import JunkImage from "./Junk_image.webp";
import RailkafeImage from "./Railkafe_image.webp";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true, // Enable auto-scroll
    autoplaySpeed: 2000, // Auto-scroll speed in milliseconds (3 seconds)

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 5,
          initialSlide: 0,
        },
      },
    ],
    prevArrow: (
      <PrevArrow>
        <span>&lt;</span>
      </PrevArrow>
    ),
    nextArrow: (
      <NextArrow>
        <span>&gt;</span>
      </NextArrow>
    ),
  };

  let cards = [
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
    {
      key: uuidv4(),
      image: "https://i.ibb.co/w0mP8kT/project1.png",
      onClick: "https://www.travoticholidays.com/",
    },
    {
      key: uuidv4(),
      image: "https://i.ibb.co/9YJNzqC/project5.png",
      onClick: "https://timesmedia.co.in/ec/public/",
    },
    {
      key: uuidv4(),
      image: "https://i.ibb.co/9G3LyrC/project7.png",
      onClick: "https://jobseekers.co.nz/",
    },
  ];

  return (
    <div className="image-slider">
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
    </div>
  );
};

const StyledSlider = styled(Slider)`
  .slick-prev,
  .slick-next {
    font-size: 60px;
    line-height: 1;
    color: #000000;
    z-index: 1;
  }

  .slick-prev {
    left: 10px;
    background-color: transparent; /* Ensure background is transparent */
  }

  .slick-next {
    right: 10px;
  }

  .slick-prev:before,
  .slick-next:before {
    display: none;
  }
`;

const SliderCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const CardContainer = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05); /* Enlarge on hover */
    cursor: pointer;
  }

  &.crop-second {
    object-fit: cover;
    height: 80%; /* Adjust height to crop as desired */
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
  left: 10px;
  transform: translateY(-50%);
  z-index: 1;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const NextArrow = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  z-index: 1;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export default ImageSlider;
