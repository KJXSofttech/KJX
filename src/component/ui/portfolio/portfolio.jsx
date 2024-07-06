import React, { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios";
import ImageSlider from "../services/Components/ProjectSlider";
import Dot from "../../../assets/dot-prtrn.png"

const Portfolio = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        axios.get("http://localhost:4567/api/v2/all-job").then((res) => {
            setData(res.data.jobsWithBase64Images)
            setLoading(false);
            const filteredResults = data.filter(item =>
                item.project.includes(searchTerm)
            );
            setFilteredData(filteredResults);
        }).catch((error) => {
            console.log(error)
            setLoading(true);
        })
    }, [])


    return (
        <Section className="bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <Wrapper>
                <Image src={Dot} alt="dot-prtrn" />
                <Holder>

                    <ImageSlider />
                   
                </Holder>
            </Wrapper>
        </Section>
    )
}

export default Portfolio;

const Load = styled.div`
    width:100%;
    height:50vh;
    display: flex;
    justify-content:center;
    align-items: center;
`

const Over = styled.div`
    width:300px;
    height:300px;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    background-color: rgb(36, 137, 225,50%);
    top:0;
    bottom: 0;
    visibility:hidden;
    opacity: 0;

`

const Div = styled.div`
    width:300px;
    height:300px;
    border-radius: 10px;
    position: relative;
    margin: 20px;
    overflow: hidden;
    &:hover
        ${Over}{
    transition: all 560ms;
        opacity: 1;
        visibility: hidden;
    }
`

const HoldCard = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items: center;
    flex-wrap: wrap;
`

const Card = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;


`

const Li = styled.div`
    padding: 10px 15px;
    font-weight: bold;
    margin-left:20px;
    font-size: 15px;
    border-radius: 50px;
    border:1px solid lightgrey;
`
const Image = styled.img`
    width:400px;
    height:400px;
    position: absolute;
    object-fit: cover;
    opacity:10%;

    left: 20px;
    transform: rotate(45deg);
`

const Hold = styled.div`
    width:100%;
    height:100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
`

const Cards = styled.div`
    width:100%;
    min-height:calc(100vh - 80px);
    height: 100%;
    display:flex;
    flex-direction: column;
    padding:60px 0px 0px;
    align-self:center;
`

const H1 = styled.h1`
    margin:0;
    font-size:17px;

    @media (min-width:1024px){
        font-size:35px;
    }
`

const Text = styled.div``

const Holder = styled.div`
    width:100%;
    align-self:center;

    @media (min-width:1024px){
        width:95%;
    }
`

const Title = styled.h1`
    font-size:40px;
    margin:0;
    color:#fff;
    /* opacity:20%; */
   
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
    padding:100px 50px;
    
    color:#006400;
`