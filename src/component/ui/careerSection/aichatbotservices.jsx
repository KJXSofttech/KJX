import React from 'react';
import styled from 'styled-components';
import shopeasy from '../../../assets/Shopeasy.mp4';
import junkbazar from '../../../assets/junkbazar.mp4';

// Styled components
const MainCapabilitiesContainer = styled.div`
    outline: 3px solid #004d00; /* Outline style: 3px thick, solid, green color */
    padding: 20px; /* Add padding to ensure content is not touching the outline */
    border-radius: 8px; /* Rounded corners for the outline */
    width: 100%; /* Full width to cover the viewport */
    width: 1480px; /* Increased max width for more space */
    
    margin-top: 150px;
    margin: 0 auto; /* Center the container horizontally */
    box-sizing: border-box; /* Include padding and border in width calculation */
`;

const BotsWe = styled.div`
    font-size: 15px; /* Font size for the title */
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    text-align: center; /* Center the heading */
    margin-left: 150vw; /* Margin set to 150% of viewport width */
    width: 30%; /* Width for the heading */
    height: 50px;
    background-color: #004d00; /* Background color for better visibility */
    padding: 10px; /* Padding around the title */
    padding-bottom: 10px;
    border-radius: 8px; /* Rounded corners for the background */
    @media (min-width: 768px) {
        font-size: 26px;
        margin-left: 170px;
        margin-bottom: 15px;
    }
    @media (max-width: 767px) {
        font-size: 24px;
        margin: 15px 0;
    }
`;

const ChatbotsWeDevelopContents = styled.div`
    display: flex;
    justify-content: space-between; /* Space out the cards and the videos */
    align-items: flex-start;
    width: 100%;
    gap: 30px; /* Space between the cards and the videos */
    flex-wrap: nowrap; /* Prevent wrapping */
`;

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Two cards per row */
    gap: 20px; /* Space between the cards */
    width: 60%; /* 60% of the container's width for the cards */
    outline: 3px solid #004d00; /* Outline style: 3px thick, solid, green color */
    padding: 10px; /* Padding inside the container */
    border-radius: 8px; /* Rounded corners for the outline */
    box-sizing: border-box; /* Include padding and border in width calculation */
    @media (max-width: 768px) {
        grid-template-columns: 1fr; /* Stack cards in one column on mobile */
        width: 100%; /* Full width on mobile */
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

const VideoContainer = styled.div`
    display: flex;
    flex-direction: row; /* Align videos horizontally */
    align-items: flex-start; /* Align videos to the top */
    justify-content: flex-end; /* Align videos to the right */
    gap: 10px; /* Space between the videos */
    width: 40%; /* 40% of the container's width for the videos */
    margin-top: -70px;
    box-sizing: border-box; /* Include padding and border in width calculation */
    @media (max-width: 768px) {
        flex-direction: column; /* Stack videos vertically on mobile */
        width: 100%; /* Full width on mobile */
    }
`;

const Video = styled.video`
    width: 100%;
    max-width: 600px; /* Adjusted width to fit within the layout */
    border-radius: 6px; /* Slightly smaller rounded corners */
    box-shadow: 0 2px 4px rgba(0,0,0,0.2); /* Reduced shadow effect */
`;

// Functional component
const ChatbotCapabilities = () => {
    return (
        <MainCapabilitiesContainer>
            <BotsWe>Capabilities Of Our Chatbots</BotsWe>
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
                    <Video autoPlay muted loop>
                        <source src={shopeasy} type="video/mp4" />
                        Your browser does not support the video tag.
                    </Video>
                    <Video autoPlay muted loop>
                        <source src={junkbazar} type="video/mp4" />
                        Your browser does not support the video tag.
                    </Video>
                </VideoContainer>
            </ChatbotsWeDevelopContents>
        </MainCapabilitiesContainer>
    );
};

export default ChatbotCapabilities;
