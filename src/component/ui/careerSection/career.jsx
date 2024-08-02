import React from 'react';
import styled from 'styled-components';
import botImage from '../../../assets/bot.gif';
import ImageSlider from '../services/Components/ProjectSlider'; // Ensure this path is correct
import animation from '../../../assets/animation.gif';
import bot1 from '../../../assets/bot1.png';
import bot2 from '../../../assets/bot2.png';
import bot3 from '../../../assets/bot44.png';
import bot4 from '../../../assets/bot4.png';
import gif from '../../../assets/bots.gif';

const Products = () => {
    return (
        <Section>
            <Wrapper1>
                <Heading>
                    <Title>Meet Our Bots</Title>
                </Heading>
                <GifContainer>
                    <AImage src={gif} alt="Animation" />
                </GifContainer>
                <ContentHolder>
                    <Text>
                        <P>
                            At KJXSOFTTECH, we offer premier solutions that redefine industry standards. Our products are crafted to address the unique challenges of modern enterprises, delivering innovative technology and exceptional service that set us apart. Discover how our tailored solutions can drive success and elevate your business to new heights. Our expertise extends into the realms of Artificial Intelligence (AI), Machine Learning (ML), and Data Science. We leverage these advanced technologies to offer solutions that enhance data-driven decision-making, automate complex processes, and unlock new insights. By integrating AI and ML into our services, we provide cutting-edge tools that help businesses stay ahead of the curve and maximize their potential.
                        </P>
                    </Text>
                </ContentHolder>
            </Wrapper1>
            <Wrapper>
                <Holder>
                    <BotSpecialization>
                        <Text>
                            <H1>Specialization in Bots</H1>
                            <P>
                                At KJXSOFTTECH, we are also at the forefront of bot technology. Our bot solutions are designed to automate tasks, enhance customer interactions, and streamline business processes. With expertise in developing advanced chatbots and automated systems, we offer solutions that can be integrated across various platforms to improve efficiency and user engagement.
                            </P>
                        </Text>
                        <ImageContainer>
                            <GalleryImage1 src={botImage} alt="Bot Specialization" />
                        </ImageContainer>
                    </BotSpecialization>
                    <AnimationSection>
                        <AImage src={animation} alt="Animation" />
                    </AnimationSection>
                    <SliderTitle>Here Are Some of Our Recent Projects:</SliderTitle>
                    <ImageSlider />
                </Holder>
            </Wrapper>
        </Section>
    );
};

export default Products;

// Styled components
const P = styled.p`
    font-size: 12px;
    color: #555;
    margin: 8px 0;
    font-family: 'Open Sans', sans-serif;
    line-height: 1.5;
    @media (min-width: 768px) {
        font-size: 14px;
        margin: 12px 0;
    }
`;

const H1 = styled.h1`
    font-size: 18px;
    color: #004d00;
    font-family: 'Raleway', sans-serif;
    margin: 0;
    @media (min-width: 768px) {
        font-size: 22px;
    }
    @media (min-width: 1024px) {
        font-size: 30px;
    }
`;

const Text = styled.div`
    flex: 1;
    padding-right: 0;
    max-width: 100%;
    box-sizing: border-box;
    @media (min-width: 768px) {
        flex: 2;
        padding-right: 10px;
        max-width: 70%;
    }
`;

const GifContainer = styled.div`
    background-color: #f6f6f6;
    padding: 15px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 80%;
`;

const ImageGallery = styled.div`
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background: linear-gradient(to bottom, #f0f0f0, #dcdcdc);
    border-radius: 20px;
    padding: 20px;
    gap: 50px;
`;

const GalleryItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    max-width: 200px;
    &:hover {
        transform: scale(1.05);
    }
`;

const GalleryImage = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: scale(1.07);
    }
    @media (max-width: 768px) {
        height: auto;
    }
`;

const GalleryImage1 = styled.img`
    height: 170px;
    width: 190px;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: scale(1.13);
    }
    @media (max-width: 768px) {
        height: auto;
        width: 100%;
    }
`;

const ImageTitle = styled.h3`
    font-size: 14px;
    margin-top: 10px;
    color: #333;
    text-align: center;
    font-family: 'Raleway', sans-serif;
    @media (min-width: 768px) {
        font-size: 16px;
    }
    @media (min-width: 1024px) {
        font-size: 18px;
    }
`;

const ContentHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 15px;
    box-sizing: border-box;
    @media (min-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
    }
`;

const Heading = styled.div`
    padding: 15px;
    border-radius: 8px;
    text-align: left;
    margin-bottom: 15px;
    width: 100%;
`;

const Title = styled.h1`
    font-size: 24px;
    margin: 0;
    color: #004d00;
    font-family: 'Raleway', sans-serif;
    @media (min-width: 768px) {
        font-size: 28px;
    }
    @media (min-width: 1024px) {
        font-size: 36px;
    }
`;

const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    margin-top: 15px;
    @media (min-width: 768px) {
        max-width: 30%;
        margin-top: 0;
    }
`;

const AIImage = styled.img`
    max-width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 8px;
    @media (min-width: 768px) {
        height: 300px;
    }
`;

const AImage = styled.img`
    width: 100%;
    height: auto;
    max-height: 50vh;
    object-fit: contain;
    @media (min-width: 768px) {
        max-height: 60vh;
    }
`;

const AnimationSection = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    margin: 15px 0;
    @media (min-width: 768px) {
        margin: 20px 0;
    }
`;

const BotSpecialization = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    width: 100%;
    box-sizing: border-box;
    margin-top: 15px;
    @media (min-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
        margin-top: 30px;
    }
`;

const Holder = styled.div`
    width: 100%;
    align-self: center;
    @media (min-width: 1024px) {
        width: 95%;
    }
`;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Wrapper1 = styled.div`
    width: 100%;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center; /* Center horizontally */
`;

const Section = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 10px;
    color: #004d00;
    position: relative;
    font-family: 'Open Sans', sans-serif;
`;

const SliderTitle = styled.h2`
    margin: 20px 0;
    font-size: 18px;
    text-align: left; /* Aligns text to the left */
    color: #004d00;
    font-family: 'Raleway', sans-serif;
    @media (min-width: 768px) {
        font-size: 20px;
    }
    @media (min-width: 1024px) {
        font-size: 24px;
    }
`;
