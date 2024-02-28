import React from 'react'
import styled from 'styled-components'
import Team from '../team'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Mission = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        navigate("/JoinUsSection");
    }
  return (
    <Section>
    <Wrapper>
        <HolderOne>
            <H1>
            A
                <span> Mission-Driven </span>
                Team That Make <span>Ideas</span>  Happen
            </H1>
            <P>
            We are not just developers, marketers, designers, strategists or managers. We are even artists, cooks, travelers, readers, musicians, among the rest other talents. We celebrate these different perspectives of each individual that translate to tech skills and overall growth of the company.
            </P>
            <Button onClick={handleSubmit}>Join Now  </Button>
        </HolderOne>
    </Wrapper>
    </Section>
    
    
    
    
   
  )
}

export default Mission

const Button = styled.button`
    width:160px;
    height: 50px;
    background:linear-gradient(110.92deg, #FF900D 8.54%, #F08200 91.46%);
    border-radius: 40px;
    border: none;
    color:#fff;
    font-weight: bold;
    font-size: 16px;
    z-index: 1;
    margin-top:20px;

    
    @media (min-width:768px){
        width:102px;
        height: 35px;
        font-size: 17px;
    }
`

const Text = styled.div`
font-size: 30px;

span{
    font-weight: 650;
    color:#006400;
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
`

const H1 = styled.h1`
font-size:45px;
font-weight: normal;
span{
    font-weight: bold;
    color:#006400;
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
padding:20px 0px;
`