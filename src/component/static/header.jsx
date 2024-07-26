// import { Link } from "react-router-dom"
// import React, { useState } from 'react';

// import styled from "styled-components"
// import { LuMenu } from "react-icons/lu"
// import { IoClose } from "react-icons/io5"

// import logo from "../../assets/favicon2.svg"
// import DropdownMenu from "./myHover1"
// import DropdownMenus from "./mobile"
// import DropdownMenu2 from "./mobile"
// import MyHovers from "./myHover1"
// import { useAuth } from "../ui/Admin/AuthContext";


// const Header = () => {

//     const [toggol, setToggol] = useState(false)
//     const [mobile, setMobile] = useState(false)
//     const [isOpen, setIsOpen] = useState(false);
//     const [isOpens, setIsOpens] = useState(false);
//     const [mobiles, setMobiles] = useState(false)
//     const { authenticated } = useAuth()

//     let pds = "20px";

//     const toggleDropdown = (isOPen) => {
//         return isOPen ? (null) : (null)
//     };

//     const toggleDropdowns = (isOpens) => {
//         return isOpens ? (null) : (null)
//     };

//     const Dropdowns = (mobile) => {
//         return setMobiles(mobile)
//     };

//     const Toggol = () => {
//         setToggol(!toggol)
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth' // Optional: smooth scrolling animation
//         });
//     }

//     const Hover = (data) => {
//         setMobile(data)
//     }

//     // onscroll()

//     return (
//         <>
//             <Section pd={toggol ? pds : ""}>
//                 <Wrapper>
//                     <Nav to={"/"} onClick={() => {
//                         window.scrollTo({
//                             top: 0,
//                             behavior: 'smooth' // Optional: smooth scrolling animation
//                         });
//                     }}><Logo src={logo} /></Nav>

//                     <Navs>
//                         <Nav to={"/"} onClick={() => {
//                             window.scrollTo({
//                                 top: 0,
//                                 behavior: 'smooth' // Optional: smooth scrolling animation
//                             });
//                         }}>Home</Nav>
//                         <div>
//                             <Nav4 to={"/#"} >Company</Nav4>
//                             <div className="drop" style={{ padding: 10, marginTop: -10 }}>
//                                 <p ><a href={"/aboutus"} onClick={() => {
//                                     window.scrollTo({
//                                         top: 0,
//                                         behavior: 'smooth' // Optional: smooth scrolling animation
//                                     });
//                                 }}>AboutUs</a></p>
//                                 <p className="my-0"><a href={"/work-environments"} onClick={() => {
//                                     window.scrollTo({
//                                         top: 0,
//                                         behavior: 'smooth' // Optional: smooth scrolling animation
//                                     });
//                                 }}>Work Environment</a></p>
//                             </div>
//                         </div>
//                         <Nav to={"/portfolio"} onClick={() => {
//                             window.scrollTo({
//                                 top: 0,
//                                 behavior: 'smooth' // Optional: smooth scrolling animation
//                             });
//                         }}>Portfolio</Nav>
//                         <Nav to={"/careers"} onClick={() => {
//                             window.scrollTo({
//                                 top: 0,
//                                 behavior: 'smooth' // Optional: smooth scrolling animation
//                             });
//                         }}>Careers</Nav>
//                         {/* <Nav2 to={"/hire-developers"} onClick={()=>{
//                     window.scrollTo({
//                     top: 0,
//                     behavior: 'smooth' // Optional: smooth scrolling animation
//                     });
//                     }}
//                           onMouseOver={() => {
//                             setIsOpen(true);
//                             toggleDropdown();
//                           }}
//                     >Hire Developers</Nav2> */}
//                         <Nav to={"/services"}
//                             onClick={() => {
//                                 window.scrollTo({
//                                     top: 0,
//                                     behavior: 'smooth' // Optional: smooth scrolling animation
//                                 });
//                             }}
//                         // onMouseOver={() => {
//                         //     setIsOpens(true);
//                         //     toggleDropdowns(true);
//                         //     toggleDropdowns(false);
//                         // }}
//                         >Services</Nav>
//                         <Button to={"/contactus"} onClick={() => {
//                             window.scrollTo({
//                                 top: 0,
//                                 behavior: 'smooth' // Optional: smooth scrolling animation
//                             })
//                         }}
//                         >Contact Us</Button>
//                     </Navs>
//                     {
//                         toggol ? (
//                             <Menu onClick={Toggol}>
//                                 <IoClose />
//                             </Menu>
//                         ) : (
//                             <Menu onClick={Toggol}>
//                                 <LuMenu />
//                             </Menu>
//                         )
//                     }
//                     {authenticated ?
//                         <Buttons to={"/=kjxsofttechb-dhdh652hdsn=admin"} onClick={() => {
//                             window.scrollTo({
//                                 top: 0,
//                                 behavior: 'smooth' // Optional: smooth scrolling animation
//                             })
//                         }}>A</Buttons>
//                         : null}
//                 </Wrapper>
//                 {
//                     toggol ? (
//                         <SideBar>
//                             {
//                                 mobile ? (
//                                     <DropdownMenus Hover={Hover} Toggol={Toggol} />
//                                 ) : (
//                                     <Div>
//                                         <Li to={"/"} onClick={Toggol}>Home</Li>
//                                         <div>
//                                             <Nav4 to={"/#"} >Company</Nav4>
//                                             <div className="drop">
//                                                 <p><a href={"/aboutus"}>AboutUs</a></p>
//                                                 <p style={{ marginTop: -0 }}><a href={"/work-environments"}>Work Environment</a></p>
//                                             </div>
//                                         </div>
//                                         <Li to={"/portfolio"} onClick={Toggol}>Portfolio</Li>
//                                         <Li to={"/careers"} onClick={Toggol}>Careers</Li>
//                                         {/* <Lis onClick={()=>{
//                                         Hover(true)
//                                     }} >Hire Developers</Lis> */}
//                                         {/* <Lis
//                                             onClick={() => {
//                                                 Dropdowns(true)
//                                             }}
//                                         >Services</Lis> */}
//                                         <Li
//                                             to={"/services"} onClick={Toggol}
//                                         // onClick={() => {
//                                         //     Dropdowns(true)
//                                         // }}
//                                         >Services</Li>
//                                         <Li to={"/contactus"} onClick={Toggol}>Contact Us</Li>
//                                     </Div>
//                                 )
//                             }
//                             {

//                                 mobiles ? (<DropdownMenu2 Dropdowns={Dropdowns} Toggol={Toggol} />) : (null)
//                             }
//                         </SideBar>
//                     ) : (null)
//                 }
//                 {isOpen ? (
//                     <DropdownMenu toggleDropdown={toggleDropdown} setIsOpen={setIsOpen} />
//                 ) : (null)
//                 }
//                 {
//                     isOpens ? (
//                         <MyHovers toggleDropdowns={toggleDropdowns} setIsOpens={setIsOpens} />
//                     ) : (
//                         null
//                     )
//                 }
//             </Section>

//         </>
//     )
// }

// export default Header;

// const Div = styled.div`
//     width:100%;
//     background-color: aliceblue;
//     display:flex;
//     flex-direction:column;
//     /* align-self:flex-end; */
//     justify-content: space-around;
//     background:#fff;

//     div{
//             width:200px;
//             display:flex;
//             flex-direction:column;
//             align-content:flex-start;
//             z-index: 10;
//             font-weight:bold;
//             margin-top:30px;
//             align-items: flex-start;

//             &:hover{
//                 .drop{
//                     display:flex;
//                     flex-direction:column;
//                     display:flex;
//                     justify-content:center;
//                     background-color:#fff;
//                     width:auto;
//                     top:120px;
//                     border-radius:5px;

//                     p a{
//                         margin:10px 5px;
//                         text-decoration:none;
//                         cursor:pointer;
//                         position:relative;
//                         width: fit-content;
//                         transition:all 500ms;
//                         color: #000;
//                         transition:all 500ms;
                    
//                         &::after{
//                             content: "";
//                             position: absolute;
//                             bottom: 0;
//                             right: 0;
//                             height: 2px;
//                             background-color: #000;
//                         }
    
//                         &:active {
//                             color: #ff6d03;
//                         }
//                         &:hover{    
//                             &::after{
//                                 background-color:#ff6d03 ;
//                             }
//                             cursor: pointer;
//                             transform: scale(0.9);
//                             color:#ff6d03 ;
//                         }
//                     }
//                 }
//             }

//             .drop{
//                 display:none;
//                 position:absolute;
//                 p{
//                 }
//             }
//         }
// `

// const Lis = styled.div`
//     width:100%;
//     display:flex;
//     align-items:center;
//     font-size:16px;
//     font-weight:bold;
//     padding-left:10px;
//     color:#000;
//     text-decoration:none;
//     margin-top:30px;
//     cursor:pointer;
//     position:relative;
//     width: fit-content;
//     transition:all 500ms;

//     &::after{
//         content: "";
//         position: absolute;
//         bottom: 0;
//         right: 0;
//         height: 2px;
//         background-color: #000;
//     }
    
//     &:active {
//         color: #ff6d03;
//     }

//     &:hover{    
//         &::after{
//             background-color:#ff6d03 ;
//         }
//         cursor: pointer;
//         transform: scale(0.9);
//         color:#ff6d03 ;
//     }
// `

// const Li = styled(Link)`
//     width:100%;
//     text-decoration: none;
//     display:flex;
//     /* background-color: red; */
//     justify-content: flex-start;
//     align-items:flex-start;
//     font-size:16px;
//     font-weight:bold;
//     padding-left:10px;
//     color:#000;
//     margin-top:30px;
//     cursor:pointer;
//     position:relative;
//     width: fit-content;
//     transition:all 500ms;

//     &::after{
//         content: "";
//         position: absolute;
//         bottom: 0;
//         right: 0;
//         height: 2px;
//         background-color: #000;
//     }
    
//     &:active {
//         color: #ff6d03;
//     }

//     &:hover{    
//         &::after{
//             background-color:#ff6d03 ;
//         }
//         cursor: pointer;
//         transform: scale(0.9);
//         color:#ff6d03 ;
//     }
// `

// const SideBar = styled.div`
//     width:90%;
//     height:calc(100vh - 80px);
//     display:flex;
//     flex-direction:column;
//     align-self:flex-end;
//     overflow:hidden;

//     @media (min-width:990px){
//         display:none;
//     }
// `

// const Buttons = styled(Link)`
//     width:40px;
//     height:40px;
//     border:none;
//     border-radius: 50px;
//     color:#fff;
//     font-size: large;
//     font-weight:bold;
//     background:linear-gradient(to right, #006400,#0064009e);
//     box-shadow: 0px 0px 2px 5px #ebebeb;
//     cursor: pointer;
//     margin-left: 20px;
//     text-decoration: none;
//     display: flex;
//     justify-content:center ;
//     align-items: center;

//     &:active {
//         color: #ff6d03;
//     }
// `


// const Button = styled(Link)`
//     width:120px;
//     height:45px;
//     border:none;
//     border-radius: 50px;
//     color:#fff;
//     font-weight:bold;
//     background:linear-gradient(to right, #006400,#0064009e);
//     cursor: pointer;
//     text-decoration: none;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `

// const Menu = styled.div`
//     width:30px;
//     height:30px;
//     color:#000;
//     display:flex;
//     justify-content:center;
//     align-items:center;
//     font-size:30px;
//     cursor: pointer;

//     @media (min-width:990px){
//         display:none;
//     }
// `

// const Nav4 = styled(Link)`
//     margin:0px 10px;
//     color:#000;
//     text-decoration:none;
//     cursor:pointer;
//     position:relative;
//     width: fit-content;
//     transition:all 500ms;
    
//     &:active {
//         color: #ff6d03;
//     }

//     &::after{
//         content: "";
//         position: absolute;
//         bottom: 0;
//         right: 0;
//         height: 2px;
//         background-color: #000;
//     }

//     &:hover{    
//         &::after{
//             background-color:#ff6d03 ;
//         }
//         cursor: pointer;
//         transform: scale(0.9);
//         color:#ff6d03 ;
//     }
// `

// const Nav = styled(Link)`
//     margin:0px 20px;
//     color:#000;
//     text-decoration:none;
//     cursor:pointer;
//     position:relative;
//     width: fit-content;
//     transition:all 500ms;
    
//     &:active {
//         color: #ff6d03;
//     }

//     &::after{
//         content: "";
//         position: absolute;
//         bottom: 0;
//         right: 0;
//         height: 2px;
//         background-color: #000;
//     }

//     &:hover{    
//         &::after{
//             background-color:#ff6d03 ;
//         }
//         cursor: pointer;
//         transform: scale(0.9);
//         color:#ff6d03 ;
//     }
// `


// const Nav2 = styled(Link)`
//     margin:0px 20px;
//     color:#000;
//     text-decoration:none;
//     cursor:pointer;
//     position:relative;
//     width: fit-content;
//     transition:all 500ms;
    
//     &:active {
//         color: #ff6d03;
//     }
//     &::after{
//         content: "";
//         position: absolute;
//         bottom: 0;
//         right: 0;
//         height: 2px;
//         background-color: #000;
//     }

//     &:hover{    
//         &::after{
//             background-color:#ff6d03 ;
//         }
//         cursor: pointer;
//         transform: scale(0.9);
//         color:#ff6d03 ;
//     }
// `

// const Navs = styled.ul`
//     display:none;

//     @media (min-width:990px){
//         display:flex;
//         justify-content:center;
//         align-items:center;
//         list-style:none;
//         font-weight:bold;

//         div{
//             display:flex;
//             flex-direction:column;

//             &:hover{
//                 .drop{
//                     display:flex;
//                     flex-direction:column;
//                     display:flex;
//                     justify-content:center;
//                     align-items:flex-start;
//                     background-color:#fff;
//                     width:auto;
//                     top:50px;
//                     border-radius:5px;
//                     box-shadow:0px 0px 5px lightgray;

//                     p a{
//                         margin:10px 5px;
//                         text-decoration:none;
//                         cursor:pointer;
//                         position:relative;
//                         width: fit-content;
//                         transition:all 500ms;
//                         color:#000;
                    
//                         &::after{
//                             content: "";
//                             position: absolute;
//                             bottom: 0;
//                             right: 0;
//                             height: 2px;
//                             background-color: #000;
//                         }
//                         &:active {
//                             color: #ff6d03;
//                         }
                    
//                         &:hover{    
//                             &::after{
//                                 background-color:#ff6d03 ;
//                             }
//                             cursor: pointer;
//                             transform: scale(0.9);
//                             color:#ff6d03 ;
//                         }
//                     }
//                 }
//             }

//             .drop{
//                 display:none;
//                     position:absolute;
//                 p{
                    
//                 }
//             }
//         }
//     }
// `

// const Logo = styled.img`
//     width:130px;
//     height:50px;
//     object-fit:contain;
// `

// const Wrapper = styled.div`
//     width:90%;
//     height:70%;
//     display:flex;
//     justify-content:space-between;
//     align-items:center;

//     @media (min-width:1025px){
//         width:89%;
//     }
// `

// const Section = styled.header`
//     padding:5px 0px;
//     width:100%;
//     background:#fff;
//     display:flex;
//     flex-wrap:wrap;
//     justify-content:center;
//     align-items:center;
//     position: sticky;
//     padding-top:${({ pd }) => pd};
//     box-shadow:0px 0px 5px lightgray;
//     top:0px;
//     z-index:100;
// `



















import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import styled from "styled-components";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import logo from "../../assets/favicon2.svg";
import DropdownMenu from "./myHover1";
import DropdownMenus from "./mobile";
import DropdownMenu2 from "./mobile";
import MyHovers from "./myHover1";
import { useAuth } from "../ui/Admin/AuthContext";

const Header = () => {
    const [toggol, setToggol] = useState(false);
    const [mobile, setMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpens, setIsOpens] = useState(false);
    const [mobiles, setMobiles] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const { authenticated } = useAuth();

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <>
            <Section pd={toggol ? "20px" : ""} darkMode={darkMode}>
                <Wrapper>
                    <Nav to={"/"}><Logo src={logo} /></Nav>
                    <Navs>
                        <Nav to={"/"} darkMode={darkMode}>Home</Nav>
                        <div>
                            <Nav4 to={"/#"} darkMode={darkMode}>mpany</Nav4>
                            <div className="drop" style={{ padding: 10, marginTop: -10 }}>
                                <p><a href={"/aboutus"}>AboutUs</a></p>
                                <p className="my-0"><a href={"/work-environments"}>Work Environment</a></p>
                            </div>
                        </div>
                        <Nav to={"/portfolio"} darkMode={darkMode}>Portfolio</Nav>
                        <Nav to={"/careers"} darkMode={darkMode}>Careers</Nav>
                        <Nav to={"/services"} darkMode={darkMode}>Services</Nav>
                        <Button to={"/contactus"} darkMode={darkMode}>Contact Us</Button>
                        <DarkModeButton darkMode={darkMode} onClick={toggleDarkMode}>
                            {darkMode ? <CiLight /> : <MdDarkMode />}
                        </DarkModeButton>
                    </Navs>
                    {
                        toggol ? (
                            <Menu onClick={() => setToggol(!toggol)}>
                                <IoClose />
                            </Menu>
                        ) : (
                            <Menu onClick={() => setToggol(!toggol)}>
                                <LuMenu />
                            </Menu>
                        )
                    }
                    {authenticated ?
                        <Buttons to={"/=kjxsofttechb-dhdh652hdsn=admin"}>A</Buttons>
                        : null}
                </Wrapper>
                {
                    toggol ? (
                        <SideBar>
                            {
                                mobile ? (
                                    <DropdownMenus Hover={setMobile} Toggol={() => setToggol(!toggol)} />
                                ) : (
                                    <Div>
                                        <Li to={"/"} onClick={() => setToggol(!toggol)}>Home</Li>
                                        <div>
                                            <Nav4 to={"/#"} >Company</Nav4>
                                            <div className="drop">
                                                <p><a href={"/aboutus"}>AboutUs</a></p>
                                                <p style={{ marginTop: -0 }}><a href={"/work-environments"}>Work Environment</a></p>
                                            </div>
                                        </div>
                                        <Li to={"/portfolio"} onClick={() => setToggol(!toggol)}>Portfolio</Li>
                                        <Li to={"/careers"} onClick={() => setToggol(!toggol)}>Careers</Li>
                                        <Li to={"/services"} onClick={() => setToggol(!toggol)}>Services</Li>
                                        <Li to={"/contactus"} onClick={() => setToggol(!toggol)}>Contact Us</Li>
                                    </Div>
                                )
                            }
                        </SideBar>
                    ) : (null)
                }
                {
                    isOpens ? (
                        <MyHovers toggleDropdowns={() => setIsOpens(!isOpens)} setIsOpens={setIsOpens} />
                    ) : (null)
                }
            </Section>
        </>
    )
}

export default Header;

const DarkModeButton = styled.button`
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 50px;
    color: ${({ darkMode }) => darkMode ? "black" : "white"};
    font-weight: bold;
    background: ${({ darkMode }) => darkMode ? "linear-gradient(to right, #006400, #0064009e)" : "darkgray"};
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
`;

const Div = styled.div`
    width:100%;
    background-color: aliceblue;
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    background:#fff;

    div{
        width:200px;
        display:flex;
        flex-direction:column;
        align-content:flex-start;
        z-index: 10;
        font-weight:bold;
        margin-top:30px;
        align-items: flex-start;

        &:hover{
            .drop{
                display:flex;
                flex-direction:column;
                display:flex;
                justify-content:center;
                background-color:#fff;
                width:auto;
                top:120px;
                border-radius:5px;

                p a{
                    margin:10px 5px;
                    text-decoration:none;
                    cursor:pointer;
                    position:relative;
                    width: fit-content;
                    transition:all 500ms;
                    color:#000;
                
                    &::after{
                        content: "";
                        position: absolute;
                        bottom: 0;
                        right: 0;
                        height: 2px;
                        background-color: #000;
                    }

                    &:active {
                        color: #ff6d03;
                    }
                    &:hover{    
                        &::after{
                            background-color:#ff6d03 ;
                        }
                        cursor: pointer;
                        transform: scale(0.9);
                        color:#ff6d03 ;
                    }
                }
            }
        }

        .drop{
            display:none;
            position:absolute;
            p{
            }
        }
    }
`

const Lis = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    font-size:16px;
    font-weight:bold;
    padding-left:10px;
    color:#000;
    text-decoration:none;
    margin-top:30px;
    cursor:pointer;
    position:relative;
    width: fit-content;
    transition:all 500ms;

    &::after{
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        height: 2px;
        background-color: #000;
    }
    
    &:active {
        color: #ff6d03;
    }

    &:hover{    
        &::after{
            background-color:#ff6d03 ;
        }
        cursor: pointer;
        transform: scale(0.9);
        color:#ff6d03 ;
    }
`

const Li = styled(Link)`
    width:100%;
    text-decoration: none;
    display:flex;
    justify-content: flex-start;
    align-items:flex-start;
    font-size:16px;
    font-weight:bold;
    padding-left:10px;
    color: ${({ darkMode }) => darkMode ? "white" : "black"};
    margin-top:30px;
    cursor:pointer;
    position:relative;
    width: fit-content;
    transition:all 500ms;

    &::after{
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        height: 2px;
        background-color: #000;
    }
    
    &:active {
        color: #ff6d03;
    }

    &:hover{    
        &::after{
            background-color:#ff6d03 ;
        }
        cursor: pointer;
        transform: scale(0.9);
        color:#ff6d03 ;
    }
`

const SideBar = styled.div`
    width:90%;
    height:calc(100vh - 80px);
    display:flex;
    flex-direction:column;
    align-self:flex-end;
    overflow:hidden;

    @media (min-width:990px){
        display:none;
    }
`

const Buttons = styled(Link)`
    width:40px;
    height:40px;
    border:none;
    border-radius: 50px;
    color:#fff;
    font-size: large;
    font-weight:bold;
    background:linear-gradient(to right, #009400,#0064009e);
    box-shadow: 0px 0px 2px 5px #ebebeb;
    cursor: pointer;
    margin-left: 20px;
    text-decoration: none;
    display: flex;
    justify-content:center ;
    align-items: center;

    
    &:active {
        color: #ff6d03;
    }
`


const Button = styled(Link)`
    width:120px;
    height:45px;
    border:none;
    border-radius: 50px;
    color:#fff;
    font-weight:bold;
    background: linear-gradient(to right, #708090  , #444444);

    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
    
    transition: opacity 1.5s ease-in-out;
    background: linear-gradient(to right, #800000 , #BC8F8F);

    }
`

const Menu = styled.div`
    width:30px;
    height:30px;
    color:#000;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:30px;
    cursor: pointer;

    @media (min-width:990px){
        display:none;
    }
`

const Nav4 = styled(Link)`
    margin:0px 10px;
    color:${({ darkMode }) => darkMode ? "white" : "black"};
    text-decoration:none;
    cursor:pointer;
    position:relative;
    width: fit-content;
    transition:all 500ms;
    
    &:active {
        color: #ff6d03;
    }

    &::after{
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        height: 2px;
        background-color: #000;
    }

    &:hover{    
        &::after{
            background-color:#ff6d03 ;
        }
        cursor: pointer;
        transform: scale(0.9);
        color:#ff6d03 ;
    }
`

const Nav = styled(Link)`
    margin:0px 20px;
    color:${({ darkMode }) => darkMode ? "white" : "black"};
    text-decoration:none;
    cursor:pointer;
    position:relative;
    width: fit-content;
    transition:all 500ms;
    
    &:active {
        color: #ff6d03;
    }

    &::after{
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        height: 2px;
        background-color: #000;
    }

    &:hover{    
        &::after{
            background-color:#ff6d03 ;
        }
        cursor: pointer;
        transform: scale(0.9);
        color:#ff6d03 ;
    }
`


const Nav2 = styled(Link)`
    margin:0px 20px;
    color:${({ darkMode }) => darkMode ? "white" : "black"};
    text-decoration:none;
    cursor:pointer;
    position:relative;
    width: fit-content;
    transition:all 500ms;
    
    &:active {
        color: #ff6d03;
    }
    &::after{
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        height: 2px;
        background-color: #000;
    }

    &:hover{    
        &::after{
            background-color:#ff6d03 ;
        }
        cursor: pointer;
        transform: scale(0.9);
        color:#ff6d03 ;
    }
`

const Navs = styled.ul`
    display:none;

    @media (min-width:990px){
        display:flex;
        justify-content:center;
        align-items:center;
        list-style:none;
        font-weight:bold;
    
        div{
            display:flex;
            flex-direction:column;

            &:hover{
                .drop{
                    display:flex;
                    flex-direction:column;
                    display:flex;
                    justify-content:center;
                    align-items:flex-start;
                    background-color:#fff;
                    width:auto;
                    top:50px;
                    border-radius:5px;
                    box-shadow:0px 0px 5px lightgray;

                    p a{
                        margin:10px 5px;
                        text-decoration:none;
                        cursor:pointer;
                        position:relative;
                        width: fit-content;
                        transition:all 500ms;
                        color:#000;
                    
                        &::after{
                            content: "";
                            position: absolute;
                            bottom: 0;
                            right: 0;
                            height: 2px;
                            background-color: #000;
                        }
                        &:active {
                            color: #ff6d03;
                        }
                    
                        &:hover{    
                            &::after{
                                background-color:#ff6d03 ;
                            }
                            cursor: pointer;
                            transform: scale(0.9);
                            color:#ff6d03 ;
                        }
                    }
                }
            }

            .drop{
                display:none;
                    position:absolute;
                p{
                    
                }
            }
        }
    }
`

const Logo = styled.img`
    width:130px;
    height:50px;
    object-fit:contain;
`

const Wrapper = styled.div`
    width:90%;
    height:70%;
    display:flex;
    justify-content:space-between;
    align-items:center;

    @media (min-width:1025px){
        width:89%;
    }
`

const Section = styled.header`
    padding:5px 0px;
    width:100%;
    background:${({ darkMode }) => darkMode ? "#303030" : "white"};
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    position: sticky;
    padding-top:${({ pd }) => pd};
    box-shadow:0px 0px 5px lightgray;
    top:0px;
    
    z-index:100;
`
