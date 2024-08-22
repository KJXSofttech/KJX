import React from "react";
import styled from "styled-components"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAuth } from "../Admin/AuthContext"
import img2 from "../../../assets/bbott.png";
import { useState } from "react";
import ReactTyped from "react-typed";

const data = [
    {
        h1: "DATA SCIENCE / AI / ML",
        br: "",
        span: "DELIVERS EXTRAORDINARY OUTCOMES.",
        image: img2
    }
];
const SimpleSlider = () => {

    const [loading, setLoading] = useState(false)

    const { scrollToComponent } = useAuth()

    const settings = {
        dots: true,
        infinite: true,
        speed: 10000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        // await axios.post("http://localhost:4567/api/v2/contact", formData)
        //     .then((response) => {
        //         console.log(response)
        //     }).catch((error) => {
        //         console.log(error.message)
        //     }).finally(() => {
        //         setLoading(false)
        //     })
        let number = 7488325096;
        let url = `https://wa.me/9661087999`;
        // Appending the message to the URL by encoding it
        // url += `&text='Hello'`;
        window.open(url);


    }
    return (
        <main className="shadow-[0_25px_40px_-15px_rgba(0,0,0,0.1)] lg:mb-8">
            <Slider className="overflow-x-hidden overflow-y-hidden" {...settings}>
                {
                    data?.map((props) => (
                        <Section className="bg-gradient-to-b from-teal-900 to-teal-600">
                            <Wrapper>
                                <Holder>
                                    <Text >
                                        <H1 className="text-white">
                                            <ReactTyped strings={[props.h1]} typeSpeed={100} loop />
                                            {/* <Typewriter text={props.h1} delay={100} /> */}
                                            <br /> {props.br}
                                        </H1>
                                        <Span className="text-white ">{props.span}</Span>
                                        <Line className="text-white" />
                                        <P className="text-white">
                                            {props.p}
                                        </P>
                                        {/* <Button onClick={handleSubmit}>Get a Quote</Button> */}
                                    </Text>
                                    <Image src={props.image} />
                                </Holder>
                            </Wrapper>
                        </Section>
                    ))
                }
            </Slider>
        </main>
    );
};

export default SimpleSlider;

const Span = styled.span`
    font-size:25px;
    font-weight:normal;
    margin-bottom:0;

    color: #333333;
    @media (min-width:990px){
        font-size:27px;
        font-weight: bold;
    }
`

const Line = styled.div`
    width:140px;
    color:#fff
    border-bottom:2px solid #015a01;
`

const Holder = styled.div`
    width:100%;
    
    @media (min-width:767px){
        width:90%;
    }
    
    @media (min-width:990px){
        width:94%;
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
`

const Image = styled.img`
    width:100%;
    min-height:300px;
    object-fit:contain;
    
    @media (min-width:767px){
        width:100%;
        height:400px;
    }

    @media (min-width:990px){
        width:50%;

    }
`

const Button = styled.button`
    width:130px;
    height:40px;
    border:none;
    border-radius:50px;
    font-size:16px;
    font-weight:bold;
    color:#fff;
    margin-top:10px;
    cursor: pointer;
    background-color:#FFD700;
`

const P = styled.p`
    margin-top:28px;

    @media (min-width:990px){
        width:100%;
        font-size:23px;
    }
`

const H1 = styled.h1`
    font-size:30px;
    font-weight:bold;
    margin-bottom:0;

    @media (min-width:990px){
        font-size:45px;
        margin:0;
    }
`

const Text = styled.div`
    font-weight:normal;
    padding:20px;
  
    @media (min-width:990px){
        width:50%;

    }
`

const Wrapper = styled.div`
    width:95%;
    padding:20px 0px;
    display:flex;
    justify-content:center;
    align-items:center; 
    color:#0d9488;
    
`

const Section = styled.section`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background: linear-gradient(to bottom, #dcdcdc, #708090);




    @media (min-width:990px){
        padding:30px 0px;
    }
`