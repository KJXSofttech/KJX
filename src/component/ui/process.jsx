import React from 'react';
import styled from 'styled-components';
import gif from "./s.gif";

const Process = () => {
    const data = [
        {
            id: 1,
            image: gif
        }
    ];

    return (
        <Section>
            <Wrapper>
                <Title>Process</Title>
                <Holder>
                    <Cards>
                        {data.map(({ id, image }) => (
                            <Card key={id}>
                                <ImageContainer>
                                    <Image src={image} alt={`GIF ${id}`} />
                                </ImageContainer>
                            </Card>
                        ))}
                    </Cards>
                </Holder>
            </Wrapper>
        </Section>
    );
};

export default Process;

const Section = styled.section`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center;
    padding: 20px 0;
    color: #006400;
`;

const Wrapper = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Align text to the left */
`;

const Title = styled.h1`
    font-size: 40px;
    margin: 0;

    @media (min-width: 1024px) {
        font-size: 65px;
    }
`;

const Holder = styled.div`
    width: 100%;
    display: flex;
    justify-content: center; /* Center cards horizontally */
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* Center cards horizontally */
    align-items: center;
    padding: 20px 0;
`;

const Card = styled.div`
    width: 400px;
    height: 350px;
    border: 1px solid lightgray;
    border-radius: 10px;
    margin: 20px;
    box-shadow: 0px 0px 10px lightgray;
    display: flex;
    justify-content: center; /* Center image horizontally */
    align-items: center;
    padding: 20px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 0px 15px black;
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center; /* Center image horizontally */
    align-items: center;
`;

const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 10px;
`;
