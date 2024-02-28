import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import img from "../../../assets/otherImage/joinUs.png"
import { useState } from "react"

const JoinUs = () => {


    const navigate = useNavigate();
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        navigate("n");
    }


    return (
        <Section>
            <Wrapper>
                <HolderOne>
                    <H1>
                        Want to be the part of our family?
                    </H1>
                    <P className="mb-6">
                        We create a place where you would be inspired.
                    </P>
                    <Button to={"/JoinUsSection"}>JOIN US</Button>
                </HolderOne>
                <Image src={img} alt="career-img.png" />
            </Wrapper>
        </Section>
    )
}

export default JoinUs;

const Button = styled(Link)`
    text-decoration:none;
    width:120px;
    height: 40px;
    background:linear-gradient(110.92deg, #FF900D 8.54%, #F08200 91.46%);
    border-radius: 28px;
    border: none;
    color:#fff;
    font-weight: 600;
    font-size: 10px;
    z-index: 1;
    margin-top:20px;

    
    @media (min-width:768px){
        // width:190px;
        // height: 50px;
        font-size: 15px;
        padding:9px 24px;
        margin-top:30px;
    }
`

const Image = styled.img`
    /* width:300px; */
    width:100%;
    height:300px;
    object-fit: contain;
`

const P = styled.p`
    font-size: 16px;
    font-weight: normal;
    color:grey;
`

const H1 = styled.h1`
    font-size:29px;
    font-weight: normal;
    span{
        font-weight: bold;
    }
`

const HolderOne = styled.div`
    @media (min-width:767px){
        width:90%;
    }
`

const Wrapper = styled.div`
    width:90%;
    
    @media (min-width:767px){
        display: flex;
        justify-content:space-between;
        align-items:center;
    }
`

const Section = styled.section`
    width:100%;
    min-height: 50vh;
    height: 100%;
    display:flex;
    justify-content:center;
    align-items: center;
    background-color: #F9F9F9;
    color:#006400;
    padding:20px 0px;
`
