// src/components/ChatbotsSection.js
import React from 'react';
import styled from 'styled-components';
import botImage from '../../../assets/chatbot1.gif';

// Styled components
const BotsWe = styled.div`
    font-size: 36px; /* Increased font size */
    color: #004d00;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    margin: 20px 0;
    text-align: center; /* Center the heading */
    width: 100%;
    @media (min-width: 768px) {
        font-size: 36px; /* Increased font size */
        margin: 30px 0;
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
    gap: 150px; /* Space between the cards and the image */
    flex-wrap: wrap;
    width: 100%;
    max-width: 1200px; /* Limit the max width to avoid stretching */
`;

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Two cards per row */
    gap: 50px;
    max-width: calc(100% - 320px); /* Ensure space for the image */
`;

const ContetSpecific = styled.div`
    box-sizing: border-box;
    margin-bottom: 20px; /* Spacing between rows */
    max-width: 350px; /* Adjust size of cards */
    text-align: center;
    @media (max-width: 768px) {
        max-width: 100%; /* Full width on mobile */
    }
`;

const ImageContainer5 = styled.div`
    flex: 0 0 300px; /* Fixed width for the image container */
    height: auto;
    margin-top: 70px;
    margin-left: 50px;
    margin-right: -350px;
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

const ChatbotsSection = () => {
    return (
        <div>
            <BotsWe>AI Chatbots we develop</BotsWe>
            <ChatbotsWeDevelopContents>
                <CardsContainer>
                    <ContetSpecific>
                        <ContentHeading>GPT-Based Chatbots</ContentHeading>
                        <ContentDescription>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorum commodi sit accusantium perspiciatis numquam? Nisi corrupti enim earum sit error fugit, quibusdam, corporis nesciunt accusamus, eos fugiat deleniti placeat?
                        </ContentDescription>
                    </ContetSpecific>
                    <ContetSpecific>
                        <ContentHeading>GPT-Based Chatbots</ContentHeading>
                        <ContentDescription>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorum commodi sit accusantium perspiciatis numquam? Nisi corrupti enim earum sit error fugit, quibusdam, corporis nesciunt accusamus, eos fugiat deleniti placeat?
                        </ContentDescription>
                    </ContetSpecific>
                    <ContetSpecific>
                        <ContentHeading>GPT-Based Chatbots</ContentHeading>
                        <ContentDescription>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorum commodi sit accusantium perspiciatis numquam? Nisi corrupti enim earum sit error fugit, quibusdam, corporis nesciunt accusamus, eos fugiat deleniti placeat?
                        </ContentDescription>
                    </ContetSpecific>
                    <ContetSpecific>
                        <ContentHeading>GPT-Based Chatbots</ContentHeading>
                        <ContentDescription>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorum commodi sit accusantium perspiciatis numquam? Nisi corrupti enim earum sit error fugit, quibusdam, corporis nesciunt accusamus, eos fugiat deleniti placeat?
                        </ContentDescription>
                    </ContetSpecific>
                </CardsContainer>
                <ImageContainer5>
                    <img src={botImage} alt="ChatBot" style={{ width: '100%', height: 'auto' }} />
                </ImageContainer5>
            </ChatbotsWeDevelopContents>
        </div>
    );
};

export default ChatbotsSection;
