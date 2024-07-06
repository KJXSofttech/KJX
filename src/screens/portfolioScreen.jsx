import Portfolio from "../component/ui/portfolio/portfolio"
import Contact from "../component/ui/contact"
import Impression from "../component/ui/impression"
import ContactSection from "../component/ui/contact1"
import HeroPage from "../component/ui/heroPage"
import portfolio from '../assets/portfolio.png'
import ImageSlider from "../component/ui/services/Components/ProjectSlider"

const PortFolio = () => {
    return (
        <>
            <HeroPage img={portfolio} c=" Responsive Web Design " h="Next Gen" br="Beside Professional Excellence!" p="We at KJXSOFTTECH aim to deliver the best of our services with the most authentic approach. This has not only helped us in creating an excellent portfolio for us but helped in serving amazing clients as well." />
            <Portfolio />
            {/* <ContactSection /> */}

            {/* <Impression/> */}
        </>
    )
}

export default PortFolio;