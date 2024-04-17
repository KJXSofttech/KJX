import { useState } from "react"
import styled from "styled-components"
import axios from "axios";
import WhatsApp from "../../assets/otherImage/watsapp.png"

const ContactForm = () => {

    

    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        whatsappnumber: '',
        budget: '',
        skype: '',
        address: '',
        message: '',
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
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
        console.log(formData)

    }

    return (
        <Form >
            <Title>
                Get A Free Quote.
            </Title>
            {/* <Label>
                <Span>Full Name*</Span>
                <Input type="text" placeholder="Enter Full Name" onChange={handleInputChange} required value={formData.name} name="name"/>
            </Label>
            <Label>
                <Span>Email Address*</Span>
                <Input type="email" placeholder="Enter Email Address" onChange={handleInputChange} required value={formData.email} name="email"/>
            </Label>
            <Label>
                <Span>Phone Number*</Span>
                <Input
                    type="tel" 
                    placeholder="Enter Phone Number" 
                    onChange={handleInputChange} 
                    required 
                    value={formData.number}
                    name="number"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    title="Please enter a valid phone number (e.g., 123-456-7890)"
                />
            </Label>
            <Label>
                <Span>Project Budget</Span>
                <Input type="text" placeholder="Enter Project Budget" onChange={handleInputChange} required value={formData.project} name="budget"/>
            </Label>
            <Label>
                <Span>WhatsApp No.</Span>
                <Input type="tel" placeholder="Enter WhatsApp No." onChange={handleInputChange} required value={formData.whatsapp} name="whatsappnumber"/>
            </Label>
            <Label>
                <Span>Skype Id</Span>
                <Input type="text"placeholder="Enter Skype Id" onChange={handleInputChange} required value={formData.skype} name="skype"/>
            </Label>
            <Label>
                <Span>Address</Span>
                <Input type="text" placeholder="Enter Address" onChange={handleInputChange} required value={formData.address} name="address"/>
            </Label>
            <Label>
                <Span>Your Message*</Span>
                <Textarea type="text" placeholder="Enter Message" onChange={handleInputChange} required value={formData.message} name="message"/>
            </Label> */}
            <div>
                <img className="mt-6 mb-6 transform transition duration-500 hover:scale-110 mx-auto" src={WhatsApp} />
            </div>
            <h1 onClick={handleSubmit} type="submit" className="p-4 hover:text-white border-green-500 rounded-md border hover:bg-lime-600">CHAT WITH US!</h1>
        </Form>
    )
}

export default ContactForm;

const Button = styled.button`
    width:100px;
    height:40px;
    border:none;
    border-radius: 50px;
    color:#fff;
    font-weight:bold;
    margin-top: 20px;
    background:linear-gradient(110.92deg, #FF900D 8.54%, #F08200 91.46%);
`

const Textarea = styled.textarea`
    height:150px;
    border-radius:5px;
    outline:none;
    border:none;
    font-size:15px;
    background-color:transparent;
    color:#000;
    box-shadow:0px 0px 5px lightgray;
    padding-left:10px;
`

const Input = styled.input`
    height:40px;
    border-radius:5px;
    outline:none;
    border:none;
    font-size:15px;
    background-color:transparent;
    color:#000;
    box-shadow:0px 0px 5px lightgray;
    padding-left:10px;
`

const Span = styled.span`
    font-size:15px;
    margin-bottom:10px;
`

const Label = styled.label`
    width:90%;
    display:flex;
    flex-direction:column;
    color:lightgrey;
    margin-bottom:15px;
`

const Title = styled.h1``

const Form = styled.form`
    width:80%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:10px;
    background-color:white;
    padding:30px 0px;    
    border:1px solid lightgray;
    box-shadow:0px 0px 5px lightgray;
    
    @media (min-width:767px){
        width:45%;
    }
`
