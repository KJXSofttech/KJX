import styled from "styled-components"
import Contact from "../contact"
import ContactSection from "../../../component/ui/contact1"
import WatsAppSection from "../../../component/ui/Watsapp"
import AboutHero from "../AboutUs/AboutHero"
import ContactUs from "./ContactUs"
import CopyrightPage from "../../static/CopyRightPage"

const ContactPage = () => {
    return (
        <>

            <ContactUs />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.890121016217!2d85.11348084694356!3d25.575322158384004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a7eea68b01c1%3A0x4de242026979619c!2sKanti%20sadan!5e0!3m2!1sen!2sng!4v1699118636141!5m2!1sen!2sng" width="100%" height="500px" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </>
    )
}
export default ContactPage