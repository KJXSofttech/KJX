import styled from "styled-components"
import fastService from "../../../assets/otherImage/fastservice.png"
import pocketFriendly from "../../../assets/otherImage/pocket.png"
import globalService from "../../../assets/otherImage/globalBuss.png"



const WhyChooseUs = () => {
    return (
        <Section>
            <Wrapper>
                <Title className='text-cyan-600'>Why KJXSOFTTECH</Title>
                <Holder>

                    <HolderTwo>
                        <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                            {/* <div class="group relative"> */}
                            {/* <div class="grid grid-rows-3 grid-flow-col gap-4"> */}
                            <div class="row-span-2">
                                <div className=" border-slate-400 border-solid border  bg-cover shadow-md">
                                    <img className="mx-auto bg-cover h-80 transform transition duration-500 hover:scale-110" src={fastService} alt="" />
                                </div>
                                <div className="border-gray-400 px-8 mx-8 bg-indigo-100 text-center p-6 shadow-md">
                                    <h5 className="font-semibold">Fast service</h5>
                                    <p>We are committed to completing projects as quickly and accurately as possible.</p>
                                </div>
                            </div>
                            {/* ---------------------------- */}
                            <div class="row-span-2">
                                <div className=" border-slate-400 border-solid border bg-auto bg-no-repeat bg-center shadow-md">
                                    <img className="mx-auto bg-cover h-80 transform transition duration-500 hover:scale-110" src={pocketFriendly} alt="" />
                                </div>
                                <div className="border-gray-400 px-8 mx-8 bg-indigo-100 text-center p-6 shadow-md">
                                    <h5 className="font-semibold">Pocket-friendly</h5>
                                    <p>We offer the greatest service at a price that is reasonable.</p>

                                </div>
                            </div>
                            {/* ---------------------------- */}
                            <div class="row-span-2">
                                <div className=" border-slate-400 border-solid border shadow-md">
                                    <img className="bg-cover h-80 transform transition duration-500 hover:scale-110" src={globalService} alt="" />
                                </div>
                                <div className="border-gray-400 px-8 mx-8 bg-indigo-100 text-center p-6 shadow-md">
                                    <h5 className="font-semibold">Global Enterprise Development</h5>
                                    <p>Our focus is on advancing your business on a worldwide scale.</p>

                                </div>
                            </div>
                        </div>
                        {/* <div className="transform transition duration-500 hover:scale-110">
                            <div className="shadow-lg border-slate-400 border-solid border">
                                <img src={fastService} alt="" />
                            </div>

                            <div>
                                <h1>Fast service</h1>
                                <p>We are committed to completing projects as quickly and accurately as possible.</p>
                            </div>
                        </div>
                        <Card className="transform transition duration-500 hover:scale-110">
                            <img src={pocketFriendly} alt="" />
                            <Span>
                                <h1>Pocket-friendly</h1>
                                <p>We offer the greatest service at a price that is reasonable.</p>
                            </Span>
                        </Card>
                        <Card className="transform transition duration-500 hover:scale-110">
                            <img src={globalService} alt="" />
                            <Span>
                                <h1>Global Enterprise Development</h1>
                                <p>Our focus is on advancing your business on a worldwide scale.</p>
                            </Span>
                        </Card> */}
                    </HolderTwo>
                </Holder>
            </Wrapper>
        </Section>
    )
}

export default WhyChooseUs;

const Span = styled.div`
    width:100%;
    height: 30%;
    background-color: #fff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Card = styled.div`
    width: 100%;
    height:450px;
    border-radius: 10px;
    background-color:transparent;// #f2fff0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 20px;
    overflow: hidden;
    

    img{
        width: 100%;
        height:100%;
        object-fit: contain;
    }

    p{
        text-align: center;
        width: 90%;
        background-color: #fff;
        margin-top:0px;
    }
    h1{
        width: 100%;
        background-color: #fff;
        text-align:center;
    }

    
    @media (min-width:766px){
        width: 350px;
    }  
`

const HolderTwo = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    @media (min-width:766px){
        width:100%;
    }   
`

const H1 = styled.h1`
    margin:0;
    font-size:12px;
    color: #000;

    @media (min-width:1024px){
        font-size:25px;
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
    font-size:30px;
    margin:0;
   
    /* opacity:20%; */
   
    @media (min-width:1024px){
        font-size:50px;
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
    background-color: #fff;
    padding:20px 0px;
    color:#000;
`