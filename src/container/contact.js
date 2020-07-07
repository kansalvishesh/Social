import React from "react";
import classes from "../CSS/routes.module.css";
import hunger from "../assets/hunger.jpg";
import CustomNavbar from "../components/navbar";
import Footer from "../components/footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { Button } from "react-bootstrap";

const Contact=()=>{
    Aos.init({duration:1000})
    return(
        <>
            <div style={{ backgroundImage:`url(${hunger})`,
                color:"white",
                fontFamily:"Lexend Giga"}} className={classes.parallax}>
                        <CustomNavbar />
                    <div className={classes.parallax} style={{
                             display:"flex",
                             alignItems:"center",
                             justifyContent:"center",
                             flexDirection:"column",
                        }} >

                        <center><h1 data-aos="fade-down" className={classes.Header} >Feed the hungry Help the needy</h1></center>
                    </div>
            </div>
            <div style={{backgroundColor:"#EBEBEB",backgroundSize:"100% 100%",paddingTop:"40px"}}>
            <div className="container" style={{display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",
                }}>
                    <center><h1 data-aos="fade-right" style={{fontWeight:"bold",borderBottom:"2px solid #F8B864",paddingBottom:"20px"}}>Get in touch</h1></center><br/>
                    <center>
                        <p><input className={classes.Input} type="text" placeholder="Enter your name"></input></p>
                        <p><input className={classes.Input} type="text" placeholder="Email"></input></p>
                        <p><input className={classes.Input} type="phone" placeholder="Phone number"></input></p>
                        <p><input  className={classes.InputMore} type="text" placeholder="Something More"></input></p>
                        <p><Button style={{borderRadius:"20px",width:"100px"}} variant="light">Send <i class="fas fa-paper-plane"></i></Button></p>
                    </center>
                    <br/><br/>
                    

            </div>
            <Footer/>
            </div>
        </>
    )
}
export default Contact;