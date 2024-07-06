import React from "react";
import styled from "styled-components"; // Import styled from styled-components
import img from "../../../assets/about-us.png";
import HeroPage from '../heroPage';

const AboutHero = () => {
  return (
    <HeroPage
      img={img}
      h="Empowering Next-Gen Excellence: Innovating with"
      c="AI/ML, Big Data, and Web Development."
      br=""
      p={[
        <>
        <br />
          Our mission is to empower businesses by offering a wide spectrum of services:
          <br />
          <BoldText>AI/ML/Data Science:</BoldText> Leveraging cutting-edge technologies to provide businesses with predictive analytics, automation, and intelligent solutions.
          <br />
          <BoldText>Big Data Solutions:</BoldText> Harnessing the power of big data to unlock valuable insights, optimize processes, and drive informed decision-making.
          <br />
          <BoldText>Web Development:</BoldText> Crafting robust and dynamic web solutions that align with the unique needs and goals of our clients.
        </>
      ]}
    />
  );
};

const BoldText = styled.span`
  font-weight: bold;
  color: #000;
`;

export default AboutHero;
