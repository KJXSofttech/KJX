// src/AIChatbotServices.js

import React from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
    padding: 20px;
    font-family: Arial, sans-serif;
    margin-left: -70px;
    background-color: #fff;
    
    width: 115%;
`;

const Header = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
    margin-left:470px;
    color: #fff;
    padding: 2.5px;
    display:flex;
    width: 48%;
    background-color: #004d00;
    padding-left: 75px;
    margin-top: 30px;
    margin-bottom: 50px;
    border-radius: 10px;
`;

const GridSection = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Two columns for top and bottom rows */
    gap: 20px;
    justify-content: center;
    margin: 0 auto;
    margin-left: 250px;
`;

const GridItem = styled.div`
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    background-color: #f9f9f9;
    max-width: 100%;
    text-align: center;
    display: flex;
    color: #000;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ItemTitle = styled.div`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
`;

const ItemDescription = styled.p`
    font-size: 14px;
    color: #666;
`;

// Functional component
const AIChatbotServices = () => {
    return (
        <Container>
            <Header>              AI Chatbot Development Services We Offer</Header>
            <GridSection>
                <GridItem>
                    <ItemTitle>Technology Consulting and Strategy Building</ItemTitle>
                    <ItemDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita architecto doloremque veritatis reprehenderit fugiat enim.
                    </ItemDescription>
                </GridItem>
                <GridItem>
                    <ItemTitle>Chatbot Design</ItemTitle>
                    <ItemDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quod eius officiis facere debitis magnam.
                    </ItemDescription>
                </GridItem>
                <GridItem>
                    <ItemTitle>Chatbot Integration</ItemTitle>
                    <ItemDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium officia delectus vitae sed hic eius?
                    </ItemDescription>
                </GridItem>
                <GridItem>
                    <ItemTitle>Maintenance and Support</ItemTitle>
                    <ItemDescription>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, quos!
                    </ItemDescription>
                </GridItem>
            </GridSection>
        </Container>
    );
};

export default AIChatbotServices;
