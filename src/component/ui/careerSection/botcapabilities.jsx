import React from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
    padding: 20px;
    font-family: Arial, sans-serif;
    width: 115%; /* Adjusted width */
    margin-left: -70px; /* Adjusted margin to align with AIChatbotServices */
    background-color: #fff; /* Background color to match */
`;

const Header = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    background-color: #004d00;
    padding: 2.5px; /* Adjusted padding */
    color: #fff;
    margin-top: 30px;
    margin-bottom: 50px;
    text-align: center; /* Center align the header text */
    border-radius: 10px;
    margin-left: 450px; /* Adjusted margin-left */
    width: 50%; /* Set width similar to AIChatbotServices */
    display: flex;
    justify-content: center; /* Center the header content horizontally */
`;

const GridSection = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Two columns for top and bottom rows */
    gap: 20px;
    justify-content: center;
    margin: 0 auto; /* Center the grid section horizontally */
    margin-left: 250px; /* Adjust margin to align with AIChatbotServices */
`;

const GridItem = styled.div`
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    background-color: #f9f9f9;
    max-width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ItemTitle = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: #000;
    margin-bottom: 10px;
`;

const ItemDescription = styled.p`
    font-size: 14px;
    color: #666;
`;

// Functional component
const ChatbotCapabilities = () => {
    return (
        <Container>
            <Header>Capabilities Implanted in our Chatbots</Header>
            <GridSection>
                <GridItem>
                    <ItemTitle>Intent Based Response</ItemTitle>
                    <ItemDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita architecto doloremque veritatis reprehenderit fugiat enim.
                    </ItemDescription>
                </GridItem>
                <GridItem>
                    <ItemTitle>Multi Channel Support</ItemTitle>
                    <ItemDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quod eius officiis facere debitis magnam.
                    </ItemDescription>
                </GridItem>
                <GridItem>
                    <ItemTitle>Multilingual Capabilities</ItemTitle>
                    <ItemDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium officia delectus vitae sed hic eius?
                    </ItemDescription>
                </GridItem>
                <GridItem>
                    <ItemTitle>Data Support</ItemTitle>
                    <ItemDescription>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, quos!
                    </ItemDescription>
                </GridItem>
            </GridSection>
        </Container>
    );
};

export default ChatbotCapabilities;
