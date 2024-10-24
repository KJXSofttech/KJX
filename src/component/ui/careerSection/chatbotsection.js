// src/components/ChatbotsSection.js
import React from 'react';
import styled from 'styled-components';
import botImage from '../../../assets/chatbot1.gif';

// Styled components
const BotsWe = styled.div`
    font-size: 36px; /* Increased font size */
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    text-align: left; /* Center the heading */
    background-color: #004d00; /* Background color for better visibility */
    width: 35%;
    border-radius: 10px;
    padding: 5px;
    @media (min-width: 768px) {
        font-size: 28px; /* Increased font size */
        
    margin-left: 80px;
    margin-bottom: 15px;
        
    padding-left: 80px;
    }
    @media (max-width: 767px) {
        font-size: 24px; /* Adjusted font size for mobile */
        margin: 15px 0;
    }
`;

const ChatbotsWeDevelopContents = styled.div`
    display: flex;
    justify-content: center; /* Center the content horizontally */
    align-items: flex-start;
    gap: 20px; /* Adjusted space between the cards and the image */
    flex-wrap: wrap;
    width: 100%;
    max-width: 1200px; /* Limit the max width to avoid stretching */
    margin: 0 auto; /* Center the container */
`;

const CardsContainer = styled.div`
    display: grid;
    margin-left: -320px;
    grid-template-columns: repeat(2, 1fr); /* Two cards per row */
    gap: 20px; /* Adjusted gap between cards */
    max-width: 100%; /* Adjusted max-width for better alignment */
    outline: 3px solid #004d00; /* Outline style: 3px thick, solid, green color */
    border-radius: 15px;
    padding: 20px; /* Added padding to ensure outline is not clipped */
    box-sizing: border-box; /* Ensure padding is included in the width calculation */
`;

const ContentSpecific = styled.div`
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

const ImageContainer = styled.div`
    flex: 0 0 300px; /* Fixed width for the image container */
    height: auto;
    margin-left: 210px;
    margin-right: -180px;
    margin-top: 170px; /* Adjusted margin for better spacing */
    @media (max-width: 768px) {
        flex: 0 0 100%; /* Full width on mobile */
        margin-top: 20px; /* Space between cards and image on mobile */
    }
`;

const ContentHeading = styled.div`
    font-size: 22px;
    font-weight: bold;
    color: #000;
    margin-bottom: 10px;
`;

const ContentDescription = styled.div`
    font-size: 16px;
    color: #555;
    line-height: 1.6;
`;

const MainChatbot = styled.div`
    outline: 3px solid #004d00; /* Outline style: 3px thick, solid, green color */
    padding: 20px; /* Added padding to ensure content is not touching the outline */
    border-radius: 8px; /* Rounded corners for the outline */
    padding-left: 70px;
    margin-top: 50px;
    margin-bottom: 50px;
    width: 1480px; /* Adjust max-width as needed */
`;

const ChatbotsSection = () => {
    return (
        <MainChatbot>
            <BotsWe>AI Chatbots We Develop</BotsWe>
            <ChatbotsWeDevelopContents>
                <CardsContainer>
                    <ContentSpecific>
                        <ContentHeading>GPT-Based Chatbots</ContentHeading>
                        <ContentDescription>
                        Harness the natural language understanding and generation capabilities of GPT-powered chatbots to elevate customer engagement and streamline automation.
                        </ContentDescription>
                    </ContentSpecific>
                    <ContentSpecific>
                        <ContentHeading>Custom CRM/ERP/CM Bots</ContentHeading>
                        <ContentDescription>
                        Develop intelligent bots that integrate with CRM, ERP, and CM systems, automating tasks and optimizing workflow efficiency.
                        </ContentDescription>
                    </ContentSpecific>
                    <ContentSpecific>
                        <ContentHeading>Transactional Chatbots</ContentHeading>
                        <ContentDescription>
                        Facilitate specific transactions such as orders, reservations, or payments, ideal for e-commerce and customer service.
                        </ContentDescription>
                    </ContentSpecific>
                    <ContentSpecific>
                        <ContentHeading>Social Media-focused Chatbots</ContentHeading>
                        <ContentDescription>
                        Build conversational and messaging bots compatible with social media platforms, enhancing engagement and communication.
                        </ContentDescription>
                    </ContentSpecific>
                    <ContentSpecific>
                        <ContentHeading>Retrieval-based Chatbot Solutions</ContentHeading>
                        <ContentDescription>
                        Design efficient chatbots for consistent interactions, perfect for customer support and FAQs.
                        </ContentDescription>
                    </ContentSpecific>
                    <ContentSpecific>
                        <ContentHeading>Customized AI Voice Assistants</ContentHeading>
                        <ContentDescription>
                        Create AI voice assistants for accurate user assistance, transforming customer and employee interactions.
                        </ContentDescription>
                    </ContentSpecific>
                </CardsContainer>

                <ImageContainer>
                    <img src={botImage} alt="ChatBot" style={{ width: '100%', height: 'auto' }} />
                </ImageContainer>
            </ChatbotsWeDevelopContents>
        </MainChatbot>
    );
};

export default ChatbotsSection;
