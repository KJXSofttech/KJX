import styled from "styled-components"
import idea from "../../../assets/idea_banner.png";
import strategy from "../../../assets/strategy.png";
import service from "../../../assets/service.png";
import customer from "../../../assets/customer.png";

const KeyValues = () =>{
    return(
        <Section>
            <Wrapper>
                <Title>Key Values</Title>
                <Holder>
                    <Text>
                        <H1>Our Key Value Pillars</H1>
                    </Text>
                    <p style={{color:"#5c5b5b"}}>We are determined to deliver the best in class and to attain that, we have a strong focus on our key value pillars that strengthen and <br /> guide our execution process. With these key pillars, we stay focused on what really matters to produce the best creative and innovative <br /> web marketing solutions.</p>
                    <HolderTwo>
                       <Card>
                            <img src={idea} alt="" />
                            <Span>
                                <h1>Innovation in Idea</h1>
                                <p>Additionally, innovation must be a brand-new concept that gives a company a competitive edge. Our team's objective is to contribute creative solutions so your business can benefit from cutting-edge technology as well. At KJX SoftTech, we have the ideal individuals who can provide your company with creative suggestions using cutting-edge technologies.</p>
                            </Span>
                       </Card>
                       <Card>
                            <img src={strategy} alt="" />
                            <Span>
                                <h1>Execution Strategy</h1>
                                <p>A strategy does not guarantee success. We need a team to carry out the plan, and we do have the ideal group of people. Our staff has the knowledge and skills to make your concept a reality. Your ideas and our plans for implementation can help your firm reach new heights.</p>
                            </Span>
                       </Card>
                       <Card>
                            <img src={service} alt="" />
                            <Span>
                                <h1>Delivering Excellence</h1>
                                <p>Time is money. We've all heard the expression "time is money." As a result, our team believes in this notion and will deliver your project on time. We understand how valuable your time is, and we stand by our promise to complete your project on time.</p>
                            </Span>
                       </Card>
                       <Card>
                            <img src={customer} alt="" />
                            <Span>
                                <h1>Client's Satisfaction</h1>
                                <p>In a sense, there are no minor moments since they are all being exaggerated right now. It all comes down to defining goals and delivering on smaller commitments along the road. Our first objective is to deliver solutions that satisfy clients. We have a sizable customer who is delighted with the services we offer in every industry.</p>
                            </Span>
                       </Card>
                    </HolderTwo>
                </Holder>
            </Wrapper>
        </Section>
    )
}

export default KeyValues;

const Span = styled.div`
    width:100%;
    color: #5c5b5b;
    /* height: 30%; */
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Card = styled.div`
    width: 100%;
    height:500px;
    border-radius: 10px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0px;
    margin: 10px;
    overflow: hidden;
    box-shadow:0px 0px 5px lightgrey;        

    img{
        width: 50%;
        height:40%;
        object-fit: contain;
    }

    p{
        text-align: center;
        width: 90%;
        margin-top:10px;
    }
    h1{
        width: 100%;
        text-align:center;
        font-size:18px 
        
    }
    


    
    @media (min-width:766px){
        width: 290px;
    }  
`


const HolderTwo = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    

    @media (min-width:768px){
        width:100%;
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

const Text = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items:center;
    flex-wrap: wrap;
    padding:25px 0px;
`

const Holder = styled.div`
    width:100%;
    align-self:center;

    @media (min-width:766px){
        width:95%;
    }
`

const Title = styled.h1`
    font-size:40px;
    margin:0;
    color:#00640065;
   
    @media (min-width:1024px){
        font-size:65px;
    }
`

const Wrapper = styled.div`
    width:95%;
    display:flex;
    flex-direction:column;

    @media (min-width:1024px){
        width: 90%;
    }
`

const Section = styled.section`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: #fff;
    padding:20px 0px;
    color:#000;

    @media (min-width:1024px){
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

