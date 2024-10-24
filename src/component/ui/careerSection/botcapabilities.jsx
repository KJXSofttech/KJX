import React from 'react';
import styled from 'styled-components';
import junkbazar from '../../../assets/junkbazar.mp4';
import asktomentor from '../../../assets/asktomentor.mp4';

// Styled components
const BotsWe = styled.div`
    font-size: 15px; /* Font size for the title */
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    text-align: center; /* Center the heading */
    width: 30%;
    height: 50px;
    background-color: #004d00; /* Light teal background for better visibility */
    padding: 10px; /* Padding around the title */
    padding-bottom: 10px;
    border-radius: 8px; /* Rounded corners for the background */
    @media (min-width: 768px) {
        font-size: 26px;
        margin-left: 150px;
        margin-bottom: 15px;
    }
    @media (max-width: 767px) {
        font-size: 24px;
        margin: 15px 0;
    }
`;

const ChatbotsWeDevelopContents = styled.div`
    display: flex;
    justify-content: center; /* Center the content horizontally */
    align-items: flex-start;
    gap: 30px; /* Space between the cards and the videos */
    flex-wrap: wrap;
    
    width: 100%;
    max-width: 1400px; /* Increased max width for the container */
    margin: 0 auto; /* Center the content horizontally */
`;

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Two cards per row */
    gap: 20px; /* Space between the cards */
    max-width: 800px; /* Increased width to fit with the videos */
    outline: 3px solid #004d00; /* Outline style: 3px thick, solid, green color */
    padding: 10px; /* Optional: Adds padding inside the container */
    border-radius: 8px; /* Optional: Rounded corners for the outline */
    @media (max-width: 768px) {
        grid-template-columns: 1fr; /* Stack cards in one column on mobile */
        max-width: 100%; /* Full width on mobile */
    }
`;

const ContetSpecific = styled.div`
    box-sizing: border-box;
    margin-bottom: 10px; /* Spacing between rows */
    max-width: 350px; /* Increased size of cards */
    text-align: center;
    background-color: #f5f5f5; /* Grey background color for the card */
    border-radius: 6px; /* Slightly smaller rounded corners */
    padding: 15px; /* Padding inside the card */
    box-shadow: 0 2px 4px rgba(0,0,0,0.2); /* Reduced shadow effect */
    @media (max-width: 768px) {
        max-width: 100%; /* Full width on mobile */
    }
`;

const VideoContainer = styled.div`
    flex: 1; /* Allow the video container to grow and take available space */
    max-width: 600px; /* Adjusted width to fit within the layout */
    margin: 0; /* Removed margins */
    display: flex; /* Align videos horizontally */
    margin-left: 50px;
    margin-top: -80px;
    justify-content: center; /* Center videos horizontally */
    gap: 10px; /* Space between the videos */
    @media (max-width: 768px) {
        flex: 0 0 100%; /* Full width on mobile */
        margin-top: 10px; /* Adjust space between cards and video on mobile */
    }
`;

const ContentHeading = styled.div`
    font-size: 18px; /* Adjusted font size */
    font-weight: bold;
    color: #000;
    margin-bottom: 10px;
`;

const ContentDescription = styled.div`
    font-size: 16px; /* Adjusted text size */
    color: #555;
    line-height: 1.6; /* Adjusted line height */
`;

const MainCapabilitiesContainer = styled.div`
    outline: 3px solid #004d00; /* Outline style: 3px thick, solid, green color */
    padding: 20px; /* Optional: Add padding to ensure content is not touching the outline */
    border-radius: 8px; /* Optional: Rounded corners for the outline */
    width: 1485px;
    margin-top: 50px;
`;

const Video = styled.video`
    width: 100%;
    max-width: 100%;
    border-radius: 6px; /* Slightly smaller rounded corners */
    box-shadow: 0 2px 4px rgba(0,0,0,0.2); /* Reduced shadow effect */
`;

// Functional component
const ChatbotCapabilities = () => {
    return (
        <MainCapabilitiesContainer>
            <BotsWe>Capabilities of Our Chatbots</BotsWe>
            <ChatbotsWeDevelopContents>
                <CardsContainer>
                    <ContetSpecific>
                        <ContentHeading>Intent-Based Responses</ContentHeading>
                        <ContentDescription>
                            Our chatbots understand and respond to user intentions with accuracy, providing relevant answers and solutions.
                        </ContentDescription>
                    </ContetSpecific>
                    <ContetSpecific>
                        <ContentHeading>Multi-Channel Support</ContentHeading>
                        <ContentDescription>
                            Seamlessly integrate with various communication channels, including web, mobile, and social media platforms.
                        </ContentDescription>
                    </ContetSpecific>
                    <ContetSpecific>
                        <ContentHeading>Multilingual Capabilities</ContentHeading>
                        <ContentDescription>
                            Communicate effectively with users in multiple languages, enhancing accessibility and user experience.
                        </ContentDescription>
                    </ContetSpecific>
                    <ContetSpecific>
                        <ContentHeading>Data-Driven Insights</ContentHeading>
                        <ContentDescription>
                            Leverage data analytics to gain insights into user interactions, improving chatbot performance and decision-making.
                        </ContentDescription>
                    </ContetSpecific>
                </CardsContainer>
                <VideoContainer>
                    <Video autoPlay muted>
                        <source src={junkbazar} type="video/mp4" />
                        Your browser does not support the video tag.
                    </Video>
                    <Video autoPlay muted>
                        <source src={asktomentor} type="video/mp4" />
                        Your browser does not support the video tag.
                    </Video>
                </VideoContainer>
            </ChatbotsWeDevelopContents>
        </MainCapabilitiesContainer>
    );
};

export default ChatbotCapabilities;
