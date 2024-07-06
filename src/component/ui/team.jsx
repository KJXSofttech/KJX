import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"

import Dot from "../../assets/dot-prtrn.png"
import { useState } from "react"

const Team = ({ text, disc, bt, fun, to }) => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        setLoading(true)

        // e.preventDefault()
        // // await axios.post("http://localhost:4567/api/v2/contact", formData)
        // //     .then((response) => {
        // //         console.log(response)
        // //     }).catch((error) => {
        // //         console.log(error.message)
        // //     }).finally(() => {
        // //         setLoading(false)
        // //     })
        // let number = 7488325096;
        // let url = `https://wa.me/9661087999`;
        // // Appending the message to the URL by encoding it
        // // url += `&text='Hello'`;
        // window.open(url);


    }

    const submit = () => {
        console.log("ButtonClick");
        navigate("/hireUsForm");
    }
    return (
        <Section className="bg-gradient-to-r from-purple-500 to-pink-400">
            <Image src={Dot} alt="dot-prtrn" />
            <Wrapper>
                <Cicrcle className="bg-pink-100" />
                <Text>
                    <H1>{text}</H1>
                    <P>{disc}</P>
                </Text>
                <CicrcleTwo className="bg-pink-100" />

                <Button onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth' // Optional: smooth scrolling animation
                    });
                }} to={to} className="bg-gradient-to-r from-blue-400 to-blue-500"  >{bt}</Button>




            </Wrapper>
            <ImageTwo src={Dot} alt="dot-prtrn" />
        </Section>
    )
}

export default Team;

const CicrcleTwo = styled.div`
    width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  opacity: 10%;
  right: 50px; /* Adjust positioning as needed */
  bottom: 100px; /* Adjust positioning as needed */
`;

const Cicrcle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  opacity: 10%;
  left: 50px; /* Adjust positioning as needed */
  top: 100px; /* Adjust positioning as needed */
`;

const ImageTwo = styled.img`
  width: 200px;
  height: 200px;
  position: absolute;
  object-fit: cover;
  opacity: 10%;
  right: 20px; /* Adjust positioning as needed */
  transform: rotate(1deg);
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  position: absolute;
  object-fit: cover;
  opacity: 10%;
  left: 20px; /* Adjust positioning as needed */
  transform: rotate(45deg);
`;

const Button = styled(Link)`
  text-decoration: none;
  width: 150px;
  height: 50px;
  border-radius: 37px;
  border: none;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  z-index: 1;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 130px;
    height: 40px;
    font-size: 18px;
  }
`;

const P = styled.p`
  margin: 0;
  font-size: 16px;

  @media (min-width: 768px) {
    font-size: 19px;
    padding: 0px 45px;
  }
`;

const H1 = styled.h1`
  margin: 0;
  font-size: 20px;

  @media (min-width: 768px) {
    font-size: 25px;
  }
`;

const Text = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
  overflow: hidden;

  @media (min-width: 768px) {
    flex-wrap: unset;
  }
`;

const Section = styled.section`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  box-sizing: border-box;
  padding: 20px 0px;

  @media (min-width: 768px) {
    padding: unset;
    overflow: hidden;
  }
`;