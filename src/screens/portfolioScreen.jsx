import Portfolio from "../component/ui/portfolio/portfolio"
import Contact from "../component/ui/contact"
import Impression from "../component/ui/impression"
import ContactSection from "../component/ui/contact1"
import HeroPage from "../component/ui/heroPage"
import portfolio from '../assets/Gear.gif'
import ImageSlider from "../component/ui/services/Components/ProjectSlider"

const PortFolio = () => {
    return (
        <>
            <HeroPage img={portfolio} c=" AI, Data Engineering, Cloud, and Responsive Web Design " h="Innovating with" br="Beside Professional Excellence!" p="At KJXSOFTTECH, our mission is to deliver industry-leading services that combine innovation with authenticity. Our expertise spans responsive web design, AI, data engineering, and cloud computing, ensuring that our clients receive comprehensive solutions tailored to their unique needs.

Our commitment to excellence has allowed us to build a stellar portfolio and establish long-lasting relationships with clients across various sectors. We pride ourselves on staying ahead of the curve, continuously integrating the latest technologies and methodologies to offer unparalleled service quality.

Whether you're looking to enhance your digital presence, leverage AI for smarter decision-making, optimize data processes, or transition to cloud-based solutions, KJXSOFTTECH is here to provide the expertise and support you need to achieve your goals." />
            <Portfolio />
            {/* <ContactSection /> */}

            {/* <Impression/> */}
        </>
    )
}

export default PortFolio;