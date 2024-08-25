import Hero from "../component/ui/homeSection/hero"
// import Health from "../component/ui/homeSection/health"
import Contact from "../component/ui/contact"
import Impression from "../component/ui/impression"
import Solution from "../component/ui/homeSection/solution"
import Industries from "../component/ui/homeSection/industries"
// import Latest from "../component/ui/homeSection/Latest"
import Service from "../component/ui/homeSection/service"
import Why_Choose_Us from "../component/ui/homeSection/why-choose-us"
import Testimonials from "../component/ui/homeSection/testimonials"
// import Pattner from "../component/ui/homeSection/pattner"
// import Brands from "../component/ui/homeSection/brands"
import Platform from "../component/ui/platforms"
import ContactSection from "../component/ui/contact1"
import WatsAppSection from "../component/ui/Watsapp"
import bckground from '../assets/otherImage/bckground.jpg'
import styled from "styled-components"
import FooterSection from "../component/static/FooterSection"
import Chatbot from '../chatbot.js';

const HomeScreen = () => {
    return (
        <>
        <Chatbot/> 
            <Hero />
            <Platform span="Platforms We Work With" />
            {/* <Latest/> */}
            <Service />
            <Industries />

            {/* <Health/>
            <Pattner/> */}
            {/* <Contact/> */}

            {/* <ContactSection />
            <WatsAppSection /> */}


            {/* <Impression text="Impressions" subtext="Our Global Impression" /> */}
            {/* <Testimonials/> */}


            <FooterSection />
        </>
    )
}



export default HomeScreen;
