

import React, { useState } from "react";
import styled from "styled-components"; 
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import designing from "../../../assets/designing.jpg";
import cloudservice from "../../../assets/cloudservice.jpg";
import dataeng from "../../../assets/data-engineer.jpg";
import dataScience from '../../../assets/otherImage/data_science1.jpeg';
import UIUX from "../../../assets/UIUX.webp";
import frontend from "../../../assets/frontent.png";
import responsive from "../../../assets/responsive-website.png";
import mobileapp from "../../../assets/illustration-19.png";
import prototype from "../../../assets/prototype.png";
import mvc from "../../../assets/mvc.jpg"
import azure from "../../../assets/azure-top-band-image.png"
import datastore from "../../../assets/data-store.png"
import dataprocess from "../../../assets/dataAnalysis.png"
import datadoc from "../../../assets/data-doc.png"
import dataint from "../../../assets/dataIntegration.png"
import angular from "../../../assets/angular_brand.png"
import nodejs from "../../../assets/node_logo.png"
import vue from "../../../assets/vue_brand.png"
import reactjs from "../../../assets/react_brand.png"

const OurServices = () => {
    const [hoveredService, setHoveredService] = useState(null);
    const [hoveredAdditionalCard, setHoveredAdditionalCard] = useState(false);

    const handleMouseEnter = (serviceName) => {
        setHoveredService(serviceName);
    };

    const handleMouseLeave = () => {
        setHoveredService(null);
    };

    const handleAdditionalCardMouseEnter = () => {
        setHoveredAdditionalCard(true);
    };

    const handleAdditionalCardMouseLeave = () => {
        setHoveredAdditionalCard(false);
    };

    const responsiveOptions = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const services = [
        { image: designing, name: "Designing Service" },
        { image: cloudservice, name: "Cloud Services" },
        { image: dataeng, name: "Data Engineering" },
        { image: dataScience, name: "AI / ML" },
        { image: mvc, name: "mvc" }
    ];

    return (
        <Section>
            <Wrapper>
                <Title className='text-cyan-700'>Services</Title>
                <Holder>
                    <Text>
                        <H1>Our Services</H1>
                    </Text>
                    <StyledCarousel
                        responsive={responsiveOptions}
                        showDots={false}
                        infinite={true}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        itemClass="carousel-item"
                        autoPlay={true}
                        autoPlaySpeed={2000}
                        transitionDuration={1000}
                    >
                        {services.map((service, index) => (
                            <Card key={index} onMouseEnter={() => handleMouseEnter(service.name)} onMouseLeave={handleMouseLeave}>
                                <Image>
                                    <img src={service.image} alt={service.name} />
                                    <ServiceName>{service.name}</ServiceName>
                                </Image>
                                {(hoveredService === service.name) && (
                                    <AdditionalInfo>
                                        <AdditionalCardContainer>
                                            {service.name === "Designing Service" && (
                                                <>
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        <img src={UIUX} alt="UIUX-img"/>
                                                    </AdditionalCard>
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        <img src={frontend} alt="frontend-img"/>
                                                    </AdditionalCard>
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        <img src={responsive} alt="responsive-img"/>
                                                    </AdditionalCard>
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        <img src={mobileapp} alt="mobileapp-img"/>
                                                    </AdditionalCard>
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        <img src={prototype} alt="prototype-img"/>
                                                    </AdditionalCard>
                                                </>
                                            )}
                                            {
                                            service.name === "Cloud Services" && (
                                                <>
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                    <img src="https://i.ibb.co/G38zPXn/what-is-amazon-web-services-aws-Photo-Room-png-Photo-Room.png" alt="aws-img"/>
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                  <img src="https://i.ibb.co/mRd5cmB/hero16-9-machinelearning-portefolio.png" alt="gpu-img"/>
                                                        </AdditionalCard>
                                                        <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                            <img src={azure} alt="azure-img"/>
                                                   </AdditionalCard>
                                                   </AdditionalCard>
                                                </>
                                            )
                                            }
                                            {
                                            service.name === "Data Engineering" && (
                                                <>
                                           
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        <img src={datastore} alt="data-storage-img"/>
                                                    </AdditionalCard>
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        <img src={dataprocess} alt="data-process-img"/>
                                                    </AdditionalCard>
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        <img src={datadoc} alt="data-document-img"/>
                                                    </AdditionalCard>
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        <img src={dataint} alt="data-intergration-img"/>
                                                    </AdditionalCard>
                                                </>
                                            )
                                            }
                                            {
                                            service.name === "AI / ML" && (
                                                <>
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        <img src="https://i.ibb.co/LNzCRNh/1698535.png" alt="data-storage-img"/>
                                                    </AdditionalCard>
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        <img src="https://i.ibb.co/DWshj53/8637099.png" alt="data-process-img"/>
                                                    </AdditionalCard>
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        <img src='https://i.ibb.co/G7m1hqH/68747470733a2f2f7777772e74656e736f72666c6f772e6f72672f696d616765732f74665f6c6f676f5f686f72697a6f6e74.png' alt="data-document-img"/>
                                                    </AdditionalCard>
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        
                                                        </AdditionalCard>
                                                </>
                                            )
                                            }
                                            {
                                            service.name === "mvc" && (
                                                <>
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        <img src={angular} alt="angular-img"/>
                                                    </AdditionalCard>
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        <img src={nodejs} alt="nodejs-img"/>
                                                    </AdditionalCard>
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        <img src={vue} alt="vue-img"/>
                                                    </AdditionalCard>
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        <img src={reactjs} alt="reactjs-img"/>
                                                    </AdditionalCard>
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        
                                                    </AdditionalCard>
                                                </>
                                            )
                                            }
                                        </AdditionalCardContainer>
                                    </AdditionalInfo>
                                )}
                            </Card>
                        ))}
                    </StyledCarousel>
                </Holder>
            </Wrapper>
        </Section>
    );
}

export default OurServices;

const StyledCarousel = styled(Carousel)`
    .carousel-item {
        margin-right: 20px;
    }
`;

const Card = styled.div`
    width: 100%;
    height:  350;
    display: flex;

    box-shadow: 0px 0px 5px lightgrey;
    border-radius: 10px;
    padding: 10px;
    margin: 20px 10px;
    cursor: pointer;
    position: relative;
    transition: transform 0.3s; 

    &:hover {
        
        transform: scale(1.1);
    }
`;

const Text = styled.div`
    margin-top: 20px;
`;

const H1 = styled.h1`
    margin: 0;
    font-size: 24px;
    color: #000;
`;

const Holder = styled.div`
    width: 100%;
    min-height: 88vh;
    height: 100%;
    align-self: center;
`;

const Title = styled.h1`
    font-size: 40px;
    margin: 0;
`;

const Wrapper = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
`;

const Section = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0px;
    color: #000;
`;

const Image = styled.div`
    width: 100%;
    height: 480px;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: wrap;
        border-radius: 10px;
    }
`;

const ServiceName = styled.p`
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    text-align: center;
    margin: 0;
    font-size: 35px;
    font-weight: bold;
    color: #fff;
    padding: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

const AdditionalInfo = styled.div`
    position: absolute;
    top: 0%; 
    left: 100px;
    display: grid;
flex-direction: row-reverse;
justify-content: space-between;
    padding: 25px;
 
`;

const AdditionalCardContainer = styled.div`
    display: flex;
flex-direction: row-reverse;
    width: 100%;
    align-content: space-around;
    display: flex;
    flex-direction: row-reverse;

`;

const AdditionalCard = styled.div`
    width: 100%;
    height: 100%;
    align:  top;
display: inline-block;
    flex-direction: row-reverse;
    justify-content: space-around;
    cursor: cursor;
    img {
        width: 350%
        height: 300%; 
    }

`;

