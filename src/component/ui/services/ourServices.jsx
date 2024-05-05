


// import React, { useState } from "react";
// import styled from "styled-components"; 
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import designing from "../../../assets/designing.jpg";
// import cloudservice from "../../../assets/cloudservice.jpg";
// import dataeng from "../../../assets/data-engineer.jpg";
// import dataScience from '../../../assets/otherImage/data_science1.jpeg';
// import UIUX from "../../../assets/UIUX.webp";
// import frontend from "../../../assets/frontent.png";
// import responsive from "../../../assets/responsive-website.png";
// import mobileapp from "../../../assets/illustration-19.png";
// import prototype from "../../../assets/prototype.png";
// import mvc from "../../../assets/mvc.jpg"
// import azure from "../../../assets/azure-top-band-image.png"


// import datastore from "../../../assets/data-store.png"
//  import dataprocess from "../../../assets/dataAnalysis.png"
// import datadoc from "../../../assets/data-doc.png"
// import dataint from "../../../assets/dataIntegration.png"

// import angular from "../../../assets/angular_brand.png"
// import nodejs from "../../../assets/node_logo.png"
// import vue from "../../../assets/vue_brand.png"
// import reactjs from "../../../assets/react_brand.png"


// const OurServices = () => {
//     const [hoveredService, setHoveredService] = useState(null);
//     const [hoveredAdditionalCard, setHoveredAdditionalCard] = useState(false);

//     const handleMouseEnter = (serviceName) => {
//         setHoveredService(serviceName);
//     };

//     const handleMouseLeave = () => {
//         setHoveredService(null);
//     };

//     const handleAdditionalCardMouseEnter = () => {
//         setHoveredAdditionalCard(true);
//     };

//     const handleAdditionalCardMouseLeave = () => {
//         setHoveredAdditionalCard(false);
//     };

//     const responsiveOptions = {
//         superLargeDesktop: {
//             breakpoint: { max: 4000, min: 3000 },
//             items: 4,
//         },
//         desktop: {
//             breakpoint: { max: 3000, min: 1024 },
//             items: 3,
//         },
//         tablet: {
//             breakpoint: { max: 1024, min: 464 },
//             items: 2,
//         },
//         mobile: {
//             breakpoint: { max: 464, min: 0 },
//             items: 1,
//         },
//     };

//     const services = [
//         { image: designing, name: "Designing Service" },
//         { image: cloudservice, name: "Cloud Services" },
//         { image: dataeng, name: "Data Engineering" },
//         { image: dataScience, name: "AI / ML" },
//         { image: mvc, name: "mvc" }
//     ];

//     return (
//         <Section>
//             <Wrapper>
//                 <Title className='text-cyan-700'>Services</Title>
//                 <Holder>
//                     <Text>
//                         <H1>Our Services</H1>
//                     </Text>
//                     <StyledCarousel
//                         responsive={responsiveOptions}
//                         showDots={false}
//                         infinite={true}
//                         containerClass="carousel-container"
//                         removeArrowOnDeviceType={["tablet", "mobile"]}
//                         itemClass="carousel-item"
//                         autoPlay={true}
//                         autoPlaySpeed={2000}
//                         transitionDuration={1000}
//                     >
//                         {services.map((service, index) => (
//                             <Card key={index} onMouseEnter={() => handleMouseEnter(service.name)} onMouseLeave={handleMouseLeave}>
//                                 <Image>
//                                     <img src={service.image} alt={service.name} />
//                                     <ServiceName>{service.name}</ServiceName>
//                                 </Image>
//                                 {(hoveredService === service.name) && (
//                                     <AdditionalInfo>
//                                         <AdditionalCardContainer>
//                                             {service.name === "Designing Service" && (
//                                                 <>
//                                                     <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
//                                                         <img src={UIUX} alt="UIUX-img"/>
//                                                         <p>UI/UX DESIGN SERVICES</p>
//                                                     </AdditionalCard>
//                                                     <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
//                                                         <img src={frontend} alt="frontend-img"/>
//                                                         <p>FRONTEND DEVELOPMENT</p>
//                                                     </AdditionalCard>
//                                                     <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
//                                                         <img src={responsive} alt="responsive-img"/>
//                                                         <p>RESPONSIVE WEBSITE DESIGN</p>
//                                                     </AdditionalCard>
//                                                     <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
//                                                         <img src={mobileapp} alt="mobileapp-img"/>
//                                                         <p>MOBILE APPLICATION SERVICES</p>
//                                                     </AdditionalCard>
//                                                     <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
//                                                         <img src={prototype} alt="prototype-img"/>
//                                                         <p>DESIGN PROTOTYPING</p>
//                                                     </AdditionalCard>
//                                                 </>
//                                             )}
//                                             {
                                            
//                                             service.name === "Cloud Services" && (
//                                                 <>
//                                                     <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
//                                                     <img src={cloudservice} alt="cloudservice-img"/>
//                                                     <p >CLOUD SERVICES</p>
                  
//                                                     </AdditionalCard>
//                                                     <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
//                                                     <img src={azure} alt="azure-img"/>
//                    <p>AZURE SERVICES</p>
//                                                     </AdditionalCard>
//                                                     <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
//                                                     <img src="https://i.ibb.co/G38zPXn/what-is-amazon-web-services-aws-Photo-Room-png-Photo-Room.png" alt="aws-img"/>
//                              <p>AWS SERVICES</p>
//                                                     </AdditionalCard>
//                                                     <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
//                                                     <img src="https://i.ibb.co/mRd5cmB/hero16-9-machinelearning-portefolio.png" alt="gpu-img"/>
//    <p>GPU SERVICE DEVELOPMENT</p>
//                                                     </AdditionalCard>
//                                                     <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        
//                                                         {/* <p>DESIGN PROTOTYPING</p> */}
//                                                     </AdditionalCard>
//                                                 </>
//                                             )
                                            
//                                             }




// {
                                            
//                                             service.name === "Data Engineering" && (
//                                                 <>
//                                                     <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
//                                                     <img src={dataeng} alt="data-eng-img"/>
//  <p>DATA ENGINEERING</p>
//                                                     </AdditionalCard>
//                                                     <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
//                                                     <img src={datastore} alt="data-storage-img"/>
//                                  <p>DATA STORAGE</p>
//                                                     </AdditionalCard>
//                                                     <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
//                                                     <img src={dataprocess} alt="data-process-img"/>
//                                  <p>DATA PROCESSING</p>
//                                                     </AdditionalCard>
//                                                     <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
//                                                     <img src={datadoc} alt="data-document-img"/>
//                                  <p>DATA DOCUMENTATION</p>
//                                                     </AdditionalCard>
//                                                     <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
//                                                     <img src={dataint} alt="data-intergration-img"/>
//                                <p>DATA INTEGRATION</p>
//                                                     </AdditionalCard>
//                                                 </>
//                                             )
                                            
//                                             }




// {
                                            
//                                             service.name === "AI / ML" && (
//                                                 <>
//                                                     <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
//                                                     <img src={dataScience} alt="data-eng-img"/>
//  <p>AI / ML</p>
//                                                     </AdditionalCard>
//                                                     <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                       
//  <img src="https://i.ibb.co/LNzCRNh/1698535.png" alt="data-storage-img"/>
//                    <p>CHATBOT</p>

//                                                     </AdditionalCard>
//                                                     <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
//                                                     <img src="https://i.ibb.co/DWshj53/8637099.png" alt="data-process-img"/>
//    <p>MACHINE LEARNING</p>
//                                                     </AdditionalCard>
//                                                     <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
//                                                     <img src='https://i.ibb.co/G7m1hqH/68747470733a2f2f7777772e74656e736f72666c6f772e6f72672f696d616765732f74665f6c6f676f5f686f72697a6f6e74.png' alt="data-document-img"/>
//               <p>TENSORFLOW</p>
//                                                     </AdditionalCard>
//                                                     <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        
//                                                         {/* <p>DESIGN PROTOTYPING</p> */}
//                                                     </AdditionalCard>
//                                                 </>
//                                             )
                                            
//                                             }



// {
                                            
//                                             service.name === "mvc" && (
//                                                 <>
//                                                     <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
//                                                     <img src={angular} alt="angular-img"/>
//                      <p>ANGULAR JS</p>
//                                                     </AdditionalCard>
//                                                     <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
//                                                     <img src={nodejs} alt="nodejs-img"/>
//                  <p>NODE JS</p>
//                                                     </AdditionalCard>
//                                                     <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
//                                                     <img src={vue} alt="vue-img"/>
//                <p>VUE JS</p>
//                                                     </AdditionalCard>
//                                                     <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
//                                                     <img src={reactjs} alt="reactjs-img"/>
//           <p>REACT JS</p>
//                                                     </AdditionalCard>
//                                                     <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                       
//                                                     </AdditionalCard>
//                                                 </>
//                                             )
                                            
//                                             }
//                                         </AdditionalCardContainer>
//                                     </AdditionalInfo>
//                                 )}
//                             </Card>
//                         ))}
//                     </StyledCarousel>
//                 </Holder>
//             </Wrapper>
//         </Section>
//     );
// }

// export default OurServices;

// const StyledCarousel = styled(Carousel)`
//     .carousel-item {
//         margin-right: 20px;
//     }
// `;

// const Card = styled.div`
//     width: 100%;
//     height: auto;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     box-shadow: 0px 0px 5px lightgrey;
//     border-radius: 10px;
//     padding: 10px;
//     margin: 20px 10px;
//     cursor: pointer;
//     position: relative;

//     &:hover {
//         transform: scale(1.05);
//         transition: all 0.5s ease-in-out;
//     }
// `;

// const Text = styled.div`
//     margin-top: 20px;
// `;

// const H1 = styled.h1`
//     margin: 0;
//     font-size: 24px;
//     color: #000;
// `;

// const Holder = styled.div`
//     width: 100%;
//     min-height: 88vh;
//     height: 100%;
//     align-self: center;
// `;

// const Title = styled.h1`
//     font-size: 70px;
//     margin: 0;
// `;

// const Wrapper = styled.div`
//     width: 95%;
//     display: flex;
//     flex-direction: column;
// `;

// const Section = styled.section`
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 20px 0px;
//     color: #000;
// `;

// const Image = styled.div`
//     width: 100%;
//     height: 480px;
//     position: relative;

//     img {
//         width: 100%;
//         height: 100%;
//         object-fit: wrap;
//         border-radius: 10px;
//     }
// `;

// const ServiceName = styled.p`
//     position: absolute;
//     bottom: 10px;
//     left: 0;
//     right: 0;
//     text-align: center;
//     margin: 0;
//     font-size: 35px;
//     font-weight: bold;
//     color: #fff;
//     padding: 10px;
//     border-bottom-left-radius: 10px;
//     border-bottom-right-radius: 10px;
// `;

// const AdditionalInfo = styled.div`
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     padding: 25px;
//     background-color: rgba(0, 0, 0, 0.9);
//     border-bottom-left-radius: 10px;
//     border-bottom-right-radius: 10px;
//     border-top-left-radius: 10px;
//     border-top-right-radius: 10px;
// `;

// const AdditionalCardContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     width: 100%;
// `;

// const AdditionalCard = styled.div`
//     width: 90%;
//     height: 80px; /* Decreased height */
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     box-shadow: 0px 0px 5px lightgrey;
//     border-radius: 10px;
//     padding: 10px;
//     margin: 5px 0; /* Decreased margin */
//     cursor: pointer;
//     transition: all 0.3s ease;

//     &:hover {
//         transform: scale(1.05);
//     }

//     img {
//         width: 50px; 
//         height: 50px; 
//         object-fit: cover;
//         border-radius: 50%;
//         margin-bottom: 5px; 
//     }

//     p {
//         margin: 0;
//         font-size: 20px;
//         color: #fff;
//         text-align: center;
//     }
// `;












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
                                                        <p>UI/UX DESIGN SERVICES</p>
                                                    </AdditionalCard>
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        <img src={frontend} alt="frontend-img"/>
                                                        <p>FRONTEND DEVELOPMENT</p>
                                                    </AdditionalCard>
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        <img src={responsive} alt="responsive-img"/>
                                                        <p>RESPONSIVE WEBSITE DESIGN</p>
                                                    </AdditionalCard>
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        <img src={mobileapp} alt="mobileapp-img"/>
                                                        <p>MOBILE APPLICATION SERVICES</p>
                                                    </AdditionalCard>
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        <img src={prototype} alt="prototype-img"/>
                                                        <p>DESIGN PROTOTYPING</p>
                                                    </AdditionalCard>
                                                </>
                                            )}
                                            {
                                            service.name === "Cloud Services" && (
                                                <>
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        <img src={cloudservice} alt="cloudservice-img"/>
                                                        <p>CLOUD SERVICES</p>
                                                    </AdditionalCard>
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        <img src={azure} alt="azure-img"/>
                                                        <p>AZURE SERVICES</p>
                                                    </AdditionalCard>
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        <img src="https://i.ibb.co/G38zPXn/what-is-amazon-web-services-aws-Photo-Room-png-Photo-Room.png" alt="aws-img"/>
                                                        <p>AWS SERVICES</p>
                                                    </AdditionalCard>
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        <img src="https://i.ibb.co/mRd5cmB/hero16-9-machinelearning-portefolio.png" alt="gpu-img"/>
                                                        <p>GPU SERVICE DEVELOPMENT</p>
                                                    </AdditionalCard>
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        
                                                        </AdditionalCard>
                                                </>
                                            )
                                            }
                                            {
                                            service.name === "Data Engineering" && (
                                                <>
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        <img src={dataeng} alt="data-eng-img"/>
                                                        <p>DATA ENGINEERING</p>
                                                    </AdditionalCard>
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        <img src={datastore} alt="data-storage-img"/>
                                                        <p>DATA STORAGE</p>
                                                    </AdditionalCard>
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        <img src={dataprocess} alt="data-process-img"/>
                                                        <p>DATA PROCESSING</p>
                                                    </AdditionalCard>
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        <img src={datadoc} alt="data-document-img"/>
                                                        <p>DATA DOCUMENTATION</p>
                                                    </AdditionalCard>
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        <img src={dataint} alt="data-intergration-img"/>
                                                        <p>DATA INTEGRATION</p>
                                                    </AdditionalCard>
                                                </>
                                            )
                                            }
                                            {
                                            service.name === "AI / ML" && (
                                                <>
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        <img src={dataScience} alt="data-eng-img"/>
                                                        <p>AI / ML</p>
                                                    </AdditionalCard>
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        <img src="https://i.ibb.co/LNzCRNh/1698535.png" alt="data-storage-img"/>
                                                        <p>CHATBOT</p>
                                                    </AdditionalCard>
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        <img src="https://i.ibb.co/DWshj53/8637099.png" alt="data-process-img"/>
                                                        <p>MACHINE LEARNING</p>
                                                    </AdditionalCard>
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        <img src='https://i.ibb.co/G7m1hqH/68747470733a2f2f7777772e74656e736f72666c6f772e6f72672f696d616765732f74665f6c6f676f5f686f72697a6f6e74.png' alt="data-document-img"/>
                                                        <p>TENSORFLOW</p>
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
                                                        <p>ANGULAR JS</p>
                                                    </AdditionalCard>
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        <img src={nodejs} alt="nodejs-img"/>
                                                        <p>NODE JS</p>
                                                    </AdditionalCard>
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        <img src={vue} alt="vue-img"/>
                                                        <p>VUE JS</p>
                                                    </AdditionalCard>
                                                    <AdditionalCard onMouseEnter={handleAdditionalCardMouseEnter} onMouseLeave={handleAdditionalCardMouseLeave}>
                                                        <img src={reactjs} alt="reactjs-img"/>
                                                        <p>REACT JS</p>
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
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 5px lightgrey;
    border-radius: 10px;
    padding: 10px;
    margin: 20px 10px;
    cursor: pointer;
    position: relative;
    transition: transform 0.5s; 

    &:hover {
        transform: rotateY(360deg);
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
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;
    background-color: rgba(0, 0, 0, 0.9);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

const AdditionalCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const AdditionalCard = styled.div`
    width: 90%;
    height: 80px; /* Decreased height */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 5px lightgrey;
    border-radius: 10px;
    padding: 10px;
    margin: 5px 0; /* Decreased margin */
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }

    img {
        width: 40px; /* Decreased image size */
        height: 40px; /* Decreased image size */
        object-fit: cover;
        border-radius: 50%;
        margin-bottom: 5px; /* Decreased margin */
    }

    p {
        margin: 0;
        font-size: 20px; /* Decreased font size */
        color: #fff;
        text-align: center;
    }
`;

