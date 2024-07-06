import HeroPage from "../component/ui/heroPage"//Done
import Team from "../component/ui/team" //yehi samajh aaya hai
import Process from "../component/ui/process" //Done
import MoreServices from "../component/ui/services/moreService" //Done
import OurServices from "../component/ui/services/ourServices" //Done
import services from '../assets/services.png'


const Services = () => {
    return (
        <>
            <HeroPage img={services} c=" Responsive Web Design " h="Next Gen" br="Beside Professional Excellence!" p="We strive to provide elegant solutions built on proven methodologies. KJXSOFTTECH technologies partner with clients to design and develop the preeminent creative solutions on numerous reliable platforms." />
            <OurServices />
            <MoreServices />
            <Team to={"/hireUsForm"} text="Hire Us for your Requirement" disc="We create smarter solution for smarter businesses." bt="Hire Now!" />
        </>
    )
}
export default Services;