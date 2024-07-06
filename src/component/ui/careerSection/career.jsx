import styled from "styled-components"

import img from "../../../assets/flexible_working.png"
import img1 from "../../../assets/leave_sepcial.png"
import img2 from "../../../assets/learning_career.png"

const Career = () => {

    const data = [
        {
            id: 1,
            title: "Flexible Working",
            discrp: "We, at KJXSOFTTECH, believe that now is the perfect time to be productive and that is why we offer flexible working hours to give our team a comfortable yet productive zone.",
            image: img
        },
        {
            id: 2,
            title: "Special Leave",
            discrp: "This is something on which we can flex! KJXSOFTTECH understands how important career growth is and hence we assure positive career growth.",
            image: img1
        },
        {
            id: 3,
            title: "Career and Learning",
            discrp: "Work and rest go hand in hand and that is why we provide special leaves to our employees.",
            image: img2
        }
    ]

    return (
        <Section>
            <Wrapper>
                <Title className='text-cyan-700'>Career</Title>
                <Holder>
                    <Text>
                        <H1>Empower Your Future With KJXSOFTTECH</H1>
                        <P>
                        KJXSOFTTECH technologies help in empowering the future of each individual that is connected with us and make sure they don't stop until they are proud of themselves. We assure a great team with creative thinkers. Our fun and productive work culture not only welcomes new ideas but believes in fair execution as well.
                        </P>
                    </Text>
                    <Cards>
                        {
                            data.map(({ id, title, discrp, image }) => (
                                <Card key={id}>
                                    <Image src={image} alt={title} />
                                    <H2>{title}</H2>
                                    <P2>{discrp}</P2>
                                </Card>
                            ))
                        }
                    </Cards>
                </Holder>
            </Wrapper>
        </Section>
    )
}

export default Career;

const P2 = styled.p`
    font-size: 15px;
    width:90%;
    font-weight: normal;
    color:grey; 
    text-align:center;
`

const H2 = styled.h2`
    margin:0;
    font-size:20px;
`

const Image = styled.img`
    width:200px;
    height:200px;
    object-fit:contain;
    margin-bottom:20px;
`

const Card = styled.div`
    width:100%;
    min-height:400px;
    height:100%;
    border:1px solid lightgray;
    border-radius:10px; 
    margin:5px;
    box-shadow:0px 0px 10px lightgray;  
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:20px;

    @media (min-width:1024px){
        width:350px;
        padding:10px;
        margin:10px;
    }
`

const Cards = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    padding:20px 0px;
`

const P = styled.p`
    font-size: 16px;
    font-weight: normal;
    color:grey;

    @media (min-width:766px){
        width:50%;
        word-break: break-all;
    }
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
    padding:20px 0px;
    color:#006400;
`