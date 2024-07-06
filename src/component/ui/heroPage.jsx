import React from 'react';
import styled from "styled-components";

const HeroPage = ({ h, br, p, c, img }) => {
  return (
    <Section>
      <Wrapper>
        <HolderOne>
          <H1>
            {h}
            <span>{c}</span>
            {br}
          </H1>
          <P>{p}</P>
        </HolderOne>
        <Image src={img} alt="career-img.png"/>
      </Wrapper>
    </Section>
  )
}

export default HeroPage;

const Image = styled.img`
  width: 100%;
  max-width: 350px; /* Adjust as necessary */
  height: auto;
  object-fit: contain;
`

const P = styled.p`
  font-size: 16px;
  font-weight: normal;
  color: grey;
  white-space: pre-line; /* Preserve line breaks */
`

const H1 = styled.h1`
  font-size: 29px;
  font-weight: normal;
  span {
    font-weight: bold;
  }
`

const HolderOne = styled.div`
  @media (min-width: 767px){
    width: 60%;
  }
`

const Wrapper = styled.div`
  width: 90%;
  max-width: 1200px; /* Adjust as necessary */
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 767px){
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

const Section = styled.section`
  width: 100%;
  min-height: 50vh;
  background-color: #F9F9F9;
  color: #006400;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
