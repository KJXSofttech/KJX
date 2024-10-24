import React from 'react';
import styled from 'styled-components';
import botImage from '../../../assets/chatbot1.gif'; // This remains unchanged
import animation from '../../../assets/animation.gif';
import atm from '../../../assets/ATM_LOGO.png';
import rag from '../../../assets/rag.png';
import shopeasy from '../../../assets/Shopeasy.mp4';
import junkbazar from '../../../assets/junkbazar.mp4';
import asktomentor from '../../../assets/asktomentor.mp4';
import ChatbotsSection from "./chatbotsection.js";
import BotCapabilities from './botcapabilities.jsx';
import AIChatbotServices from './aichatbotservices.jsx';
import plans from '../../../assets/Plans.png'
// Styled components
const Section = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 15px;
    color: #004d00;
    font-family: 'Roboto', sans-serif;
`;

const Title = styled.h1`
    font-size: 28px;
    margin-top: 20px;
    color: #000;
    font-family: Poppins, 'sans-serif';
    text-align: left;
    font-weight: bold;
    width: 100%;
    @media (min-width: 768px) {
        font-size: 36px;
    }
    @media (max-width: 767px) {
        font-size: 24px; // Adjust for mobile
    }
`;

const Subtitle = styled.h2`
    font-size: 22px;
    margin: 10px 0;
    color: #004d00;
    font-family: Poppins, 'sans-serif';
    text-align: left;
    font-weight: bold;
    width: 100%;
    @media (min-width: 768px) {
        font-size: 28px;
    }
    @media (max-width: 767px) {
        font-size: 18px; // Adjust for mobile
    }
`;
const Subtitleed = styled.h2`
    font-size: 22px;
    color: #004d00;
    font-family: 'Poppins', sans-serif;
    text-align: left;
    font-weight: bold;
    margin-left: 27px;
    width: 100%;
    @media (min-width: 768px) {
        font-size: 28px;
    }
    @media (max-width: 767px) {
        font-size: 18px; // Adjust for mobile
    }
`;
const Subtitleask = styled.h2`
    font-size: 22px;
    margin: 10px 0;
    margin-top:45px;
    color: #004d00;
    font-family: Poppins, 'sans-serif';
    text-align: left;
    font-weight: bold;
    width: 100%;
    @media (min-width: 768px) {
        font-size: 28px;
    }
    @media (max-width: 767px) {
        margin-top: 30px;
        font-size: 18px; // Adjust for mobile
    }
`;

const Subtitle1 = styled.h2`
    font-size: 52px;
    color: #000;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    font-weight: bold;
    width: 100%;
    display: flex; /* Use flexbox for vertical alignment */
    align-items: center; /* Center text vertically */
    justify-content: center; /* Center text horizontally */

    @media (min-width: 768px) {
        font-size: 28px;
        margin-top: -15px; /* Ensure no extra margin for desktop */
    }

    @media (max-width: 767px) {
        font-size: 24px; /* Adjust font size for mobile */
        margin-top: -5px; /* Adjust margin for mobile */
        font-size: 15px;
    }
`;


const Paragraph = styled.p`
    font-size: 14px;
    color: #555;
    font-family: 'Merriweather', serif;
    line-height: 1.6;
    text-align: left;
    margin: 0;
    @media (min-width: 768px) {
        font-size: 16px;
    }
    @media (max-width: 767px) {
        font-size: 14px; // Adjust for mobile
    }
`;

const Paragraphask = styled.p`
    font-size: 42px;
    margin-left:70px;
    color: #000;
    font-family: Poppins, 'sans-serif';
    text-align: left;
    font-weight: bold;
    width: 100%;
    @media (min-width: 768px) {
        font-size: 28px;
    }
    @media (max-width: 767px) {
        margin-left: 10px; // Adjust for mobile
        font-size: 18px; // Adjust for mobile
    }
`;

const KeyFeatures = styled.ul`
    list-style-type: none;
    padding-left: 0;
    margin-left: 50px;
    width: 100%;
    @media (min-width: 768px) {
        padding-left: 20px;
    }
    @media (max-width: 767px) {
        margin-left: 10px; // Adjust for mobile
        padding-left: 10px; // Adjust for mobile
    }
`;

const KeyFeatures1 = styled.ul`
    list-style-type: none;
    padding-left: 0;
    margin-top: 10px;
    margin-left: 40px;
    width: 120%;
    @media (min-width: 768px) {
        padding-left: 20px;
    }
    @media (max-width: 767px) {
        margin-left: 10px; // Adjust for mobile
        padding-left: 10px; // Adjust for mobile
        width: 100%; // Adjust for mobile
    }
`;

const FeatureItem = styled.li`
    font-size: 14px;
    color: #333;
    margin-bottom: 10px;
    font-weight: normal;
    @media (min-width: 768px) {
        font-size: 16px;
    }
    @media (max-width: 767px) {
        font-size: 14px; // Adjust for mobile
    }
`;



const FeatureItemask = styled.li`
    font-size: 14px;
    color: #333;
    margin-left:60px;
    margin-bottom: 10px;
    font-weight: normal;
    @media (min-width: 768px) {
        font-size: 16px;
    }
    @media (max-width: 767px) {
        margin-left: 10px; // Adjust for mobile
        font-size: 14px; // Adjust for mobile
    }
`;

const BoldText = styled.span`
    font-weight: bold;
    font-size: 14px;
    color: black;
    padding-right: 5px;
     @media (min-width: 768px) {
        font-size: 16px;
    }
    @media (max-width: 767px) {
        font-size: 14px; // Adjust for mobile
    }
`;

const ContentHolder = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`;
const imgplans = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0;
    align-items:center;
    padding: 0;
    box-sizing: border-box;
`;
const AnimationSection = styled.div`
    width: 100%;
    margin: 10px 0;
    text-align: left;
`;

const BotSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 20px 0;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const TextContainer = styled.div`
    flex: 1;
    margin-right: 20px;
    max-width: calc(100% - 220px);
        @media (max-width: 768px) {
        margin-right: 0;
        max-width: 100%;
    }
`;

const ImageContainer = styled.div`
    flex: 0 0 auto;
    width: auto;
    margin-right: -500px;
    @media (max-width: 768px) {
        width: 100%;
        margin-right: 0; // Adjust for mobile
    }

`;

const VideoContainer = styled.div`
    display: flex;
    height: 500px;
    flex-direction: row;
    width: 85.5%;
    margin-top: 50px;
    gap: 100px; /* No extra space between videos */
        > *:first-child {
        margin-left: 320px; /* Adjust the margin as needed */
    }
        @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center; /* Center-align videos horizontally */
        width: 100%;
        height: auto;
        gap: 20px; /* Adjust spacing between videos for mobile */
        > *:first-child {
            margin-left: 70px; /* Remove margin on mobile */
        }
    }
`;

const Video = styled.video`
    flex: 1;
    width: 50%;
    max-width: 50%; /* Ensure videos span the full width */
    height: auto;
    object-fit: cover;
        @media (max-width: 768px) {
        width: 100%; /* Full width for mobile */
        justify-content: center; /* Center-align videos horizontally */
        margin-left: 70px;
    }
`;

const ImgPlansContainer = styled.div`
    display: flex;
    justify-content: center;  // Center horizontally
    align-items: center;      // Center vertically (if you set a height)]
    margin-left: 270px;
    margin-top:70px;
    border-radius: 8px;      // Optional: add border radius
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Optional: add a box shadow
`;

const ImgPlansImage = styled.img`
    max-width: 100%;  // Ensure the image is responsive
    height: auto;     // Maintain aspect ratio
    border-radius: 8px; // Optional: match border radius of container
`;

const TeContainer = styled.div`
    width: 87vw;
    margin-top:60px;
    height: 50px;
    margin-left: 85px;
    background-color: #c2c2c2;
    padding: 20px;
    border-radius: 8px;
    box-sizing: border-box;
    text-align: center;
    overflow: hidden;
        @media (max-width: 768px) {
        width: 100%; /* Full width for mobile */
        margin-left: 0; /* Adjust for mobile */
    }
`;

const ask = styled.div`
    margin: 20px 0;
    font-size: 18px;
    text-align: left;
    color: #004d00;
    font-family: 'Poppins', sans-serif;
    @media (min-width: 768px) {
        font-size: 20px;
    }
    @media (min-width: 1024px) {
        font-size: 24px;
    }
    @media (max-width: 767px) {
        font-size: 16px; // Adjust for mobile
    }
`;

const AImage = styled.img`
    width: 170vh;
    height: auto;
    margin-top: 50px;
    margin-left: 150px;
    max-height: 50vh;
    
    margin-bottom: 50px;
    object-fit: contain;
    @media (min-width: 768px) {
        max-height: 60vh;
    }
    @media (max-width: 767px) {
        width: 100%; /* Full width for mobile */
        margin-left: 0; /* Adjust for mobile */
        max-height: 40vh; /* Adjust height for mobile */
    }
`;

const bots1 = styled.img`
    width: 150%;
    height: auto;
    max-height: 50vh;
    object-fit: contain;
    @media (min-width: 768px) {
        max-height: 60vh;
    }
    @media (max-width: 767px) {
        width: 100%; /* Full width for mobile */
        max-height: 40vh; /* Adjust height for mobile */
    }

`;

const GalleryImage1 = styled.img`
    height: 350px;
    width: auto;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: scale(1.13);
    }
    @media (max-width: 768px) {
        height: auto;
        width: 100%; /* Full width for mobile */
    }
`;
const AtmImage = styled.img`
    width: 100%; /* Full width of its container */
    max-width: 300px; /* Adjust as needed */
    height: auto; /* Maintain aspect ratio */
    margin-top: 25px; /* Center horizontally and adjust top margin */
    display: block; /* Ensure margin auto works for horizontal centering */
    max-height: 50vh; /* Adjust height to ensure it fits well */
    object-fit: contain;
    @media (min-width: 768px) {
        max-height: 60vh; /* Adjust height for larger screens */
        margin-left: 39vw;
    }
    @media (max-width: 767px) {
    
    margin-left: 7vw;
        max-width: 90%; /* Adjust width for mobile */
        max-height: 40vh; /* Adjust height for mobile */
    }
`;


const GridSection = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Two columns */
    grid-template-rows: repeat(2, auto); /* Two rows with auto height */
    gap: 20px; /* Adjust spacing between items */
    margin: 20px 0;
    margin-left:
    width: 100%;
    aligm-items: center;
    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr); /* Keep two columns for tablets */
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr; /* Single column for mobile */
        grid-template-rows: auto; /* Adjust rows for mobile */
    }
`;

const GridItem = styled.div`
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;

    /* Optional: Add styles for responsiveness */
    @media (max-width: 768px) {
        padding: 15px; /* Adjust padding for mobile */
    }
`;
const ImageContainer5 = styled.div`
    flex: 0 0 auto;
    width: 50px;
    margin-top: -50px;
    height: 750px;
    margin-right: -500px;
    @media (max-width: 768px) {
        width: 100%;
        margin-right: 0; // Adjust for mobile
    }

`;
const ContentHeading = styled.div`
    font-size: 22px;
    font-weight: bold;
    color: #004d00;
    margin-bottom: 10px;
`;

const planstxt = styled.p`
    font-size: 35px;
    font-weight: bold;
    color: #004d00;
    margin-bottom: 10px;
`;
const ContentDescription = styled.div`
    font-size: 16px;
    color: #555;
    line-height: 1.6;
`;

const Products = () => {
    return (
        <Section>
{/* 
            <VideoContainer>
                            <Video src={shopeasy} alt="Shopeasy" autoPlay muted loop />
                            <Video src={junkbazar} alt="Junkbazar" autoPlay muted loop />
                            <Video src={asktomentor} alt="AskToMentor" autoPlay muted loop />
                        </VideoContainer> */}
            <ContentHolder>
                <Title>Empowering Business with AI-Driven Chatbots, Customized LLMs, and RAG Solutions</Title>
                
                <BotSection>
                    <TextContainer>
                        <Subtitle>Cutting-Edge Chatbot Solutions</Subtitle>
                        <Paragraph>
                            At KJXSofftech, we specialize in developing advanced chatbot solutions tailored to meet the unique needs of your business. Our chatbots are designed to enhance customer engagement, streamline operations, and provide 24/7 support. Whether you need a simple customer service bot or a complex AI-driven conversational agent, we have the expertise to deliver robust and scalable solutions.
                        </Paragraph>

                        <Subtitle>Key Features:</Subtitle>
                        <KeyFeatures>
                            <FeatureItem><BoldText>Natural Language Processing (NLP):</BoldText> Our chatbots understand and process human language naturally and effectively.</FeatureItem>
                            <FeatureItem><BoldText>Multichannel Integration:</BoldText> Seamlessly integrate chatbots with your website, social media, and messaging platforms.</FeatureItem>
                            <FeatureItem><BoldText>Customizable:</BoldText> Tailor the chatbot’s responses and functionalities to match your business requirements.</FeatureItem>
                            <FeatureItem><BoldText>Analytics and Insights:</BoldText> Gain valuable insights into customer interactions and continuously improve the chatbot’s performance.</FeatureItem>
                        </KeyFeatures>
                        
 
                    </TextContainer>
                    <ImageContainer>
                        <GalleryImage1 src={botImage} alt="Bot Specialization" />
                    </ImageContainer>
                </BotSection>

                <AnimationSection>
                    <Subtitle>Customized LLMs, and RAG Solutions</Subtitle>
                    <Paragraph>KJXSofftech leads in deploying advanced Retrieval-Augmented Generation (RAG) models, which seamlessly integrate information retrieval with text generation to deliver accurate, relevant, and context-aware responses. Additionally, we offer customized Large Language Models (LLMs) tailored to diverse industry needs, ensuring superior performance and precision across applications, from natural language understanding to complex data analysis.</Paragraph>

                    <KeyFeatures>
                        <FeatureItem><BoldText> Custom Solutions (NLP):</BoldText> Industry-Specific Applications: From healthcare to finance, we develop LLM models tailored to your industry’s unique requirements.</FeatureItem>
                        <FeatureItem><BoldText>Integration Services:</BoldText> Seamlessly integrate LLM models with your existing systems and workflows.</FeatureItem>
                        <FeatureItem><BoldText>Scalable and Secure:</BoldText> Our solutions are designed to scale with your business and ensure data security and privacy.</FeatureItem>
                        <FeatureItem><BoldText>Ongoing Support and Maintenance:</BoldText> We provide continuous support to ensure your applications run smoothly and efficiently.</FeatureItem>
                    </KeyFeatures>

                    <AImage src={rag} alt="Animation" />
                    
                  
            
          
            <BotCapabilities />
            
            <AIChatbotServices/>
            <ChatbotsSection />

            <TeContainer>
                        <Subtitle1>Our Plans </Subtitle1>
                    </TeContainer>

            <ImgPlansContainer>
            <ImgPlansImage src={plans} alt="Plans_Image" />
        </ImgPlansContainer>
                    <TeContainer>
                        <Subtitle1>Discover Our Upcoming Products </Subtitle1>
                    </TeContainer>
                    <AtmImage src={atm} alt="ATM Logo" /> {/* Updated to use AtmImage */}
                    
                    <Subtitleask>AskToMentor:</Subtitleask>
                    <Paragraphask>Benefits Of Joining US</Paragraphask>

                    <KeyFeatures1>
                        <FeatureItemask><BoldText> ● Broadcast your schedule or ongoing classes:</BoldText> and will reach to the matching skilled mentees by notification which will help you to gain more paid audience.</FeatureItemask>
                        <FeatureItemask><BoldText> ● Live streaming facility</BoldText> where you can live stream your course content and get the popularity among the course signed mentees on the platform.</FeatureItemask>
                        <FeatureItemask><BoldText>● Make a Difference:</BoldText> Use your experience and knowledge to inspire and guide the careers of motivated individuals. Help them navigate their career paths and overcome challenges.</FeatureItemask>
                        <FeatureItemask><BoldText>● Expand Your Network:</BoldText> Connect with other professionals in your field and grow your own network. Collaborate with like-minded individuals and build valuable relationships.</FeatureItemask>
                        <FeatureItemask><BoldText>● Share Your Expertise:</BoldText> Lead workshops, offer career advice, and share insights that can shape the future of promising talent. Your guidance can be the key to their success.</FeatureItemask>
                        <FeatureItemask><BoldText>● Flexible Commitment:</BoldText> Mentor on your own schedule. Whether you can commit a few hours a month or more, we offer flexible opportunities to fit your availability.</FeatureItemask>
                    </KeyFeatures1>
                    <AImage src={animation} alt="Animation" />
                </AnimationSection>
            </ContentHolder>
        </Section>
    );
};

export default Products;
