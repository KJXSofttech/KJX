import React from 'react'
import AboutHero from '../component/ui/AboutUs/AboutHero'
import Welcome from '../component/ui/AboutUs/Welcome'
import FactsAndFigures from '../component/ui/AboutUs/FactsAndFigures'
import KeyValues from '../component/ui/AboutUs/KeyValues'
import JoinUs from '../component/ui/AboutUs/JoinUs'

const AboutScreen = () => {
  return (
    <>
      <AboutHero />
      <Welcome />
      <FactsAndFigures />
      <KeyValues />
      <JoinUs />
    </>
  )
}

export default AboutScreen