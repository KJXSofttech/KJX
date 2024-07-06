import React, { useState } from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Import your images
import designing from "../../../assets/designing.jpg";
import cloudservice from "../../../assets/cloudservice.jpg";
import dataeng from "../../../assets/data-engineer.jpg";
import dataScience from "../../../assets/otherImage/data_science1.jpeg";
import mvc from "../../../assets/mvc.jpg";
import UIUX from "../../../assets/UIUX.webp";
import frontend from "../../../assets/frontent.png";
import azure from "../../../assets/azure-top-band-image.png";
import datastore from "../../../assets/data-store.png";
import dataprocess from "../../../assets/dataAnalysis.png";
import datadoc from "../../../assets/data-doc.png";
import dataint from "../../../assets/dataIntegration.png";
import angular from "../../../assets/angular_brand.png";
import nodejs from "../../../assets/node_logo.png";
import vue from "../../../assets/vue_brand.png";
import reactjs from "../../../assets/react_brand.png";
import tf from "./tf.png"

const OurServices = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);

  const handleMouseEnter = (serviceName) => {
    setHoveredService(serviceName);
    setIsAutoScrollPaused(true); // Pause auto-scroll when hovering
  };

  const handleMouseLeave = () => {
    setHoveredService(null);
    setIsAutoScrollPaused(false); // Resume auto-scroll when leaving hover
  };

  const getImageName = (imageUrl, isPrimaryImage) => {
    // Handle local images first
    if (!imageUrl.startsWith("http")) {
      switch (imageUrl) {
        case UIUX:
          return "UI/UX Design";
        case frontend:
          return "Frontend Development";
        case azure:
          return "Microsoft Azure";
        case datastore:
          return "Data Store";
        case dataprocess:
          return "Data Processing";
        case datadoc:
          return "Data Documentation";
        case dataint:
          return "Data Integration";
        case angular:
          return "Angular";
        case nodejs:
          return "Node.js";
        case vue:
          return "Vue.js";
        case reactjs:
          return "React.js";
        case tf:
          return "Tensorflow";
        default:
          return "Image Name";
      }
    } else {
      // Handle remote URLs (preferably not using switch case)
      if (imageUrl.includes("amazon-web-services")) {
        return "Amazon Web Services";
      } else if (imageUrl.includes("machinelearning-portefolio")) {
        return "GPU Services";
      } else if (imageUrl.includes("1698535")) {
        return "Chatbot";
      } else if (imageUrl.includes("8637099")) {
        return "Machine Learning";
      } else if (imageUrl.includes("68747470733a2f2f7777772e74656e736f7266")) {
        return "TensorFlow";
      } else {
        return "Image Name";
      }
    }
  };

  const responsiveOptions = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const services = [
    {
      image: designing,
      name: "Designing Service",
      additionalImages: [UIUX, frontend, azure],
    },
    {
      image: cloudservice,
      name: "Cloud Services",
      additionalImages: [
        "https://i.ibb.co/G38zPXn/what-is-amazon-web-services-aws-Photo-Room-png-Photo-Room.png",
        "https://i.ibb.co/mRd5cmB/hero16-9-machinelearning-portefolio.png",
        azure,
      ],
    },
    {
      image: dataeng,
      name: "Data Engineering",
      additionalImages: [datastore, dataprocess, datadoc, dataint],
    },
    {
      image: dataScience,
      name: "AI / ML",
      additionalImages: [
        "https://i.ibb.co/LNzCRNh/1698535.png",
        "https://i.ibb.co/DWshj53/8637099.png",tf
      ],
    },
    {
      image: mvc,
      name: "MVC",
      additionalImages: [angular, nodejs, vue, reactjs],
    },
  ];

  return (
    <Section>
      <Wrapper>
        <Title>Services</Title>
        <ContentWrapper>
          <Text>
            <H1>Our Services</H1>
          </Text>
          <StyledCarousel
            responsive={responsiveOptions}
            showDots={false}
            infinite={true}
            containerClass="carousel-container"
            itemClass="carousel-item"
            autoPlay={!isAutoScrollPaused} // Auto-play when not paused
            autoPlaySpeed={2000}
            transitionDuration={1000}
          >
            {services.map((service, index) => (
              <Card
                key={index}
                onMouseEnter={() => handleMouseEnter(service.name)}
                onMouseLeave={handleMouseLeave}
                isHovered={hoveredService === service.name}
              >
                <ImageWrapper>
                  <img src={service.image} alt={service.name} />
                  <ServiceName>{service.name}</ServiceName>
                  {hoveredService === service.name && (
                    <AdditionalInfo>
                      <TopItems>
                        {service.additionalImages.slice(0, 2).map((image, index) => (
                          <AdditionalCard key={index} style={{ transitionDelay: `${index * 0.}s` }}>
                            <img src={image} alt={`additional-${index}`} />
                            <ImageLabel>{getImageName(image, true)}</ImageLabel>
                          </AdditionalCard>
                        ))}
                      </TopItems>
                      <BottomItems>
                        {service.additionalImages.slice(2).map((image, index) => (
                          <AdditionalCard key={index} style={{ transitionDelay: `${index * 0.2}s` }}>
                            <img src={image} alt={`additional-${index}`} />
                            <ImageLabel>{getImageName(image, false)}</ImageLabel>
                          </AdditionalCard>
                        ))}
                      </BottomItems>
                    </AdditionalInfo>
                  )}
                </ImageWrapper>
              </Card>
            ))}
          </StyledCarousel>
        </ContentWrapper>
      </Wrapper>
    </Section>
  );
};

const ContentWrapper = styled.div`
  width: 100%;
  position: relative;
  white-space: nowrap; /* Keep all cards in a single line */
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  color: #fff;
`;

const Wrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  z-index: 1;
  
`;

const H1 = styled.h1`
  margin: 0;
  padding-left: 30px;
  font-size: 35px;
  color: #006400;
  text-align: left;
  
`;

const Title = styled.h1`
  font-size: 50px;
  margin: 0;
  text-align: left;
  color: #0e7490;
  
`;

const StyledCarousel = styled(Carousel)`
  .carousel-item {
    margin-right: 20px;
  }
`;

const Card = styled.div`
  position: relative;
  width: 90%; /* Adjust width as per your design */
  max-width: 450px; /* Limit maximum width */
  height: 300px; /* Adjust height as needed */
  display: inline-block;
  box-shadow: 0px 0px 5px grey;
  border-radius: 15px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.3s, margin 0.3s;
  z-index: 1;
  margin: 50px;

  &:hover {
    transform: scale(0.9);
    box-shadow: 10px 10px 10px grey;
    z-index: 100;
    gap: 30px;
  }

  ${(props) =>
    !props.isHovered &&
    `
    transform: scale(0.9);
  `}
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.2s ease-in-out;
  }
`;

const ServiceName = styled.p`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  text-align: center;
  font-size: 24px; /* Adjust font size as needed */
  font-weight: bold;
  color: #fff;
  z-index: 2;
  
  text-shadow: #000000 3px 0 10px;
`;

const AdditionalInfo = styled.div`
  position: absolute;
  width: 100%;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  z-index: 10;
  transition: top 0.2s ease;

  ${Card}:hover & {
    top: -4.5rem;
  }
`;

const TopItems = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 200px;
  margin-bottom: 6rem;
`;

const BottomItems = styled.div`
  display: flex;
  justify-content: center;
  gap: 200px;
  margin-top: 180px;
`;

const AdditionalCard = styled.div`
  width: 150px;
  height: 100px;
  overflow: hidden; /* Ensure overflow is hidden */
  border-radius: 8px; /* Adjust border radius as needed */
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  position: relative; /* Ensure positioning context */

  img {
    width: 40%;
    height: 60%;
    object-fit: cover;
    transition: transform 0.2s ease-in-out;
    margin-left: 40px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const ImageLabel = styled.p`
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  text-align: center;
  margin-bottom: 18px;
  margin-right: 20px;
  padding: 0px 0px; /* Padding around text */
  font-size: 16px; /* Adjust font size as needed */
  color: #000000;
  white-space: nowrap; /* Ensure text doesn't wrap */
  overflow: hidden; /* Ensure no overflow */
  text-overflow: clip; /* Show ellipsis if text is too long */
`;

export default OurServices;
