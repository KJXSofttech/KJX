import HeroPage from "../component/ui/heroPage"
import Career from "../component/ui/careerSection/career"
import JoinUs from "../component/ui/careerSection/joinUs"
import Contact from "../component/ui/contact"
import Team from "../component/ui/team"
import Impression from "../component/ui/impression"
import ContactSection from "../component/ui/contact1"


import careers_img from ".././assets/career1.png"
import WatsAppSection from "../component/ui/Watsapp"

const CareerScreen = () => {   
  return (
    <>
      <HeroPage  img={careers_img} c=" the world of " h="Enter into" br="growth and creativity" p="We strive to provide elegant solutions built on proven methodologies. KJXSOFTTECH technologies partner with clients to design and develop the preeminent creative solutions on numerous reliable platforms."/>
      <Career/>
      {/* <JoinUs /> */}
      {/* <ContactSection />
      <WatsAppSection /> */}
      <Team to={"/JoinUsSection"} bt="Apply Now!" text="Want to join our team?" disc="Apply for the job now & grow your career"/>
      {/* <Impression text="Impressions" subtext="Our Global Impression"/> */}
    </>
  )
}

export default CareerScreen;