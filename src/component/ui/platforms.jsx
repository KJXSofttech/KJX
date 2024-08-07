import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import kafka from "../../assets/kafka.png"
import laravel from "../../assets/laravel.png"
import tensorflow from "../../assets/tensorflow.png"
import react from "../../assets/react.jpg"
import machineLearning from "../../assets/machineLearning.png"
import python3 from "../../assets/python3.png"
import fastAPI from "../../assets/fastAPI.png"
import adobe from "../../assets/adobe.png"
import langchain from "../../assets/langchain.jpg"
import sql from "../../assets/sql.png"
import pine from "../../assets/pine.jpg"
import hug from "../../assets/hug.png"
import azure from "../../assets/azure.png"
import azureone from "../../assets/azure1.png"
import azuretwo from "../../assets/azure2.png"
const Platform = ({ span }) => {

    const [slideshowValue, setSlideshowValue] = useState(6); // Default value for slideshow

    useEffect(() => {
        const handleResize = () => {
            // Get the current screen width
            const screenWidth = window.innerWidth;

            // Adjust slideshow value based on screen width
            if (screenWidth >= 1200) {
                setSlideshowValue(6); // Show 3 items for screens larger than or equal to 1200px
            } else if (screenWidth >= 768) {
                setSlideshowValue(3); // Show 2 items for screens larger than or equal to 768px
            } else {
                setSlideshowValue(3); // Show 1 item for smaller screens
            }
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Call handleResize initially to set the initial value
        handleResize();

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: slideshowValue,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 1500,
        cssEase: "linear"
    };


    return (
        <main className="shadow-lg lg:mb-3">


            <Section>
                <Wrapper>
                    <Title className='text-cyan-700'>Tools</Title>
                    <Holder>
                        <Text>
                            <H1>{span}</H1>
                        </Text>
                        <Cards>
                            <Div>
                                <Slider className='mb-10 mt-10' style={{ width: "100%", overFLow: "hidden", }} {...settings}>
                                    <Box>
                                        <Image className="mx-auto transform transition duration-500 hover:scale-110" src={azure} alt="" />
                                    </Box>
                                    <Box>
                                        <Image  className="mx-auto transform transition duration-500 hover:scale-110 inline-block align-middle" src={azureone} alt="" />
                                    </Box>
                                    <Box>
                                        <Image  className="mx-auto transform transition duration-500 hover:scale-110 inline-block align-middle" src={azuretwo} alt="" />
                                    </Box>
                                    <Box>
                                        <Image  className="mx-auto transform transition duration-500 hover:scale-110 inline-block align-middle" src={kafka} alt="" />
                                    </Box>

                                    <Box>
                                        <Image className="mx-auto transform transition duration-500 hover:scale-110" src={tensorflow} alt="" />
                                    </Box>
                                    <Box>
                                        <Image className="mx-auto transform transition duration-500 hover:scale-110" src={pine} alt="" />
                                    </Box>
                                    <Box>
                                        <Image className="mx-auto transform transition duration-500 hover:scale-110" src={langchain} alt="" />
                                    </Box>
                                    <Box>
                                        <Image className="mx-auto transform transition duration-500 hover:scale-110" src={hug} alt="" />
                                    </Box>
                                    <Box>
                                        <Image className="mx-auto transform transition duration-500 hover:scale-110" src={sql} alt="" />
                                    </Box>
                                    <Box>
                                        <Image className="mx-auto transform transition duration-500 hover:scale-110" src={laravel} alt="" />
                                    </Box>
                                    <Box>
                                        <Image className="mx-auto transform transition duration-500 hover:scale-110" src={adobe} alt="" />
                                    </Box>
                                    <Box>
                                        <Image className="mx-auto transform transition duration-500 hover:scale-110" src={react} alt="" />
                                    </Box>
                                    <Box>
                                        <Image className="mx-auto transform transition duration-500 hover:scale-110" src={machineLearning} alt="" />
                                    </Box>
                                    <Box>
                                        <Image className="mx-auto transform transition duration-500 hover:scale-110" src={python3} alt="" />
                                    </Box>
                                    <Box>
                                        <Image className="mx-auto transform transition duration-500 hover:scale-110" src={fastAPI} alt="" />
                                    </Box>
                                </Slider>
                            </Div>
                        </Cards>
                    </Holder>
                </Wrapper>
            </Section>
        </main>
    )
}

export default Platform;

// const Slider = styled.div`
//     /* Common styles for all screen sizes */
//   background-color: #f0f0f0;
//   padding: 10px;

//   @media (min-width: 768px) {
//     /* Styles for screens wider than 768px (e.g., tablets) */
//     background-color: #fff;
//     padding: 20px;
//   }

//   @media (min-width: 1024px) {
//     /* Styles for screens wider than 1024px (e.g., desktop) */
//     background-color: #eaeaea;
//     padding: 30px;
//   }
// `;


const Box = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`

const Div = styled.div`
    width:100%;
    height:100%;
    display:flex;
     /* Adjust spacing for screens wider than 768px (e.g., tablets) */
  @media (min-width: 768px) {
    margin: 0 -10px; /* Adjust the margin as needed */
  }

  /* Adjust spacing for screens narrower than 768px (e.g., mobile) */
  @media (max-width: 768px) {
    margin: 0 -5px; /* Reduce the margin for mobile */
  }
`;


const Image = styled.img`
    width:130px;
    height:130px;
    object-fit:contain;

`

const Cards = styled.div`
    width:100%;
    height:calc(50vh - 120px);
    display:flex;
    justify-content:center;
    align-items:center;
    align-self:center;
`

const H1 = styled.h1`
    margin:0;
    font-size:12px;

    @media (min-width:1024px){
        font-size:25px;
    }
`

const Text = styled.div``

const Holder = styled.div`
    width:100%;
    align-self:center;
    overflow:hidden;

    @media (min-width:1024px){
        width:95%;
    }
`

const Title = styled.h1`
    font-size:30px;
    margin:0;
    
    /* opacity:20%; */
   
    @media (min-width:1024px){
        font-size:50px;
    }
`

const Wrapper = styled.div`
    width:95%;
    display:flex;
    flex-direction:column;
`

const Section = styled.section`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:20px 0px;
    color:#000;
`