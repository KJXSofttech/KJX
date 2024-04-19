import React  from "react"
import styled from "styled-components"
import img from "../../../assets/aboutus.png"
import img1  from "../../../assets/Reg_number.jpeg"
import img2  from "../../../assets/compNo.jpeg"
const Welcome = () =>{
    return(
        <Section>
            <Wrapper>
                <Title>Welcome</Title>
                <Holder>
                    <Text>
                        <H1>About Us</H1>
                    </Text>
                          
                    <HolderTwo>
                        <Image>
                            <img src={img}/>
                        </Image>
                        <Text2>
                            <H2>Our <span>Story</span> </H2>
                            <P>
                            "At KJX SoftTech, we specialize in catalyzing rapid business growth, particularly in the digital realm. Our commitment to transparency, ethical values, and customer-centric approach sets us apart in the software development industry."
                            </P>
                            <P> "With a dedicated team of highly-trained professionals, we empower organizations with modern technologies, accelerating their journey to success. As a forward-thinking company, we take pride in delivering top-notch web and mobile solutions to businesses of all sizes, consistently driving client satisfaction and overall economic progress." </P>
                            <P> "Let us fuel your brand's digital evolution with our unwavering dedication, expertise, and exceptional services."
</P>
                        </Text2>
                    </HolderTwo>
                        <image>
                            <img src={img1} alt="" />
                            <img src={img2} alt="" />
                        </image>
                </Holder>
            </Wrapper>
        </Section>
    )
}

export default Welcome;

const HolderTwo = styled.div`
    width:100%;
    padding: 20px 0px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width:766px){
        width:100%;
        display: flex;
        justify-content:space-between;
        align-items:center;
        flex-direction: row;
        /* padding:30px 0px; */
    }   
`

const Image = styled.div`
    width:90%;
    
    img{
        width:90%;
        height:100%;
        object-fit: contain;
    }
    
    @media (min-width:766px){
        width:50%;
        align-self: flex-start;
    }  

    @media (min-width:1205px){
        height:500px;
    }
`

const H2 = styled.h1`
    font-weight: normal;
    margin-top: 0;
    font-size: 30px;
    color: #006400;

    .target{
        color:#F18806 ;
        font-weight: 700;
    }
`

const P = styled.p`
    font-size: 16px;
    font-weight: normal;
    color:rgba(000,000,000,90%);

    @media (min-width:766px){
        width:100%;
        word-break: break-all;
    }
`

const H1 = styled.h1`
    margin:0;
    font-size:17px;
    color: #000;

    @media (min-width:1024px){
        font-size:35px;
    }
`

const Text2 = styled.div`
    @media (min-width:766px){
        width:45%;
    }
`

const Text = styled.div`
    margin-top:20px;
`

const Holder = styled.div`
    width:100%;
    min-height: 88vh;
    height: 100%;
    align-self:center;

    @media (min-width:766px){
        width:95%;
    }
`

const Title = styled.h1`
    font-size:40px;
    margin:0;
    color: #00640065;
   
    @media (min-width:1024px){
        font-size:65px;
    }
`

const Wrapper = styled.div`
    width:95%;
    display:flex;
    flex-direction:column;
`

const Section = styled.section`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:20px 0px;
    color:#000;
`