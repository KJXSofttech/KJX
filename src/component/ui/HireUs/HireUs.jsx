import React, { useEffect, useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.css';
import '../HireUs/Form.css';
import country from '../HireUs/country.json';
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import Swal from 'sweetalert2';

const HireNowForm = () => {

    function sendEmail(e) {
        console.log("form Data ", e)
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

        emailjs.sendForm('service_xegr7op', 'template_w4kvmnu', e.target, 'w6YrJF19aGQUp7J0G')
            .then((result) => {
                Swal.fire({
                    icon: "success",
                    title: "Thank you for Submitting Our Team will Connect with you soon.",
                    showConfirmButton: false,
                    timer: 5500
                });
                window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: "error",
                    title: "Please try again Maximum 52 kb file can be attached in the attachment",
                    showConfirmButton: false,
                    timer: 5500
                });
            });
    }
    const [input, setInput] = useState({
        firstname: "",
        lastname: "",
        email: "",
        number: "",
        budget: "",
    })
    let { firstname, lastname, email, number, } = input;
    const changedata = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const [data, setData] = useState([])
    useEffect(() => {
        async function getCode() {
            const res = await fetch("https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json")
            const data = await res.json()
            setData(data)

        }

        getCode()
    }, [data])

    const [range, setRange] = useState(5000)
    const [showtab, setShowtab] = useState(1);

    const handletab = (e) => {
        setShowtab(e);
    }
    return (
        <>
            <div className='container col-md-12 p-4 text-center w-[100px]'>
                <div className='container'>
                    <h2>Hire us - <b>By Just Filling The Form</b></h2>
                </div>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-9 mx-auto">
                        <h5>All Fields are Mandantory</h5>
                        <form onSubmit={sendEmail}>
                            <div className="form-group row">
                                <div className="col-sm-6">
                                    <label for="inputFirstname">First Name</label>
                                    <input type="text" name='firstname' className="rounded-9 form-control p-3 mt-2 " id="inputFirstname" required onChange={changedata} />
                                    <div class="invalid-feedback">
                                        Please choose a username.
                                    </div>
                                </div>
                                <div className="col-sm-6 ">
                                    <label for="inputLastname">Last Name</label>
                                    <input type="text" name='lastname' required className="form-control p-3 mt-2 rounded-9" id="inputLastname" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-6 mt-3">
                                    <label for="inputAddressLine1">Email Address</label>
                                    <input type="email" name='email' required className="form-control p-3 mt-2 rounded-9" id="inputAddressLine1" />
                                </div>
                                <div className="col-sm-2 mt-3">
                                    <label for="inputAddressLine2">Phone</label>
                                    <select className='form-control p-3 mt-2 rounded-9' name="code" required>
                                        {
                                            data.map((code, index) => {
                                                return (
                                                    <option key={index}>{code.code} {code.dial_code}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-sm-4 mt-3">
                                    <label for="inputAddressLine2"> Number</label>
                                    <input type="number" name='number' required className="form-control p-3 mt-2 rounded-9" id="inputAddressLine2" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-12 mt-3">
                                    <label for="inputCity">Country</label>
                                    <select className='form-control p-3 mt-2 border rounded-9' required>
                                        {
                                            country.map((country, index) => {
                                                return (

                                                    <option key={index}>{country.country_name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-sm-12 mt-3">
                                    <label for="inputState">Hire Us As</label>
                                    <select className="form-control select-field shadow-none p-3 mt-2 rounded-9" name="hire_as" id="hire_as" required>
                                        <option>Select</option>
                                        <option value="python-developer">Python Developer</option>
                                        <option value="react-js-developer">React Js Developer</option>
                                        <option value="php-developer">PHP Developer</option>
                                        <option value="web-designer">Web Designer</option>
                                        <option value="Angular-Development">Angular Development</option>
                                        <option value="Node-Js-Development">Node Js Development</option>
                                        <option value="Data-Engineer">Data Engineer</option>
                                        <option value="UI/UX-Developer">UI/UX Developer</option>
                                        <option value="RPA-Developer">RPA Developer</option>
                                        <option value="ETL-Developer">ETL Developer</option>
                                        <option value="Chatbot-Developer">Chatbot Developer</option>
                                        <option value="ML/AI-Developer">ML/ AI Developer</option>
                                        <option value="AWS-Data-Engineer">AWS Data Engineer</option>
                                        <option value="DevOps-Engineer">DevOps Engineer</option>
                                        <option value="Vue-Js-Developer">Vue Js Developer</option>
                                        <option value="Digital-Marketing">Digital Marketing</option>
  
                                    </select>
                                </div>
                            </div>
                            <div className={showtab === 1 ? "form-group row active" : "d-none"} id='hide'>

                                <div className="col-sm-12 mt-3">
                                    <label for="inputAddressLine1">Project Budget</label>
                                    <p className=' text-end'>₹ {range}</p>
                                    <input type="range" name="budget" class="form-range" required pe="range" min="0" max="100000" step="10" value={range} onChange={(e) => setRange(e.target.value)} id="customRange3" />
                                </div>
                                <div className="col-sm-12 mt-3">
                                    <label for="inputWebsite">Description</label>
                                    <textarea type="text" name='description' required rows={5} className="form-control p-3 mt-2 rounded-9" id="inputWebsite" />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-dark-blue px-6 mt-4 float-end rounded-6" >Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HireNowForm