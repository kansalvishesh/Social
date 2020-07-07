import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import classes from "../CSS/routes.module.css";
import hunger from "../assets/hunger.jpg";
import change from "../assets/change.jpg";
import child from "../assets/child.jpeg";
import about from "../assets/about.png";
import texture from "../assets/texture.jpg"
import CustomNavbar from "../components/navbar";
import { Row, Col } from "react-bootstrap";
import Carousal from "../components/carousal";
import Footer from "../components/footer";

const About = ()=>{
    Aos.init({duration:2000})
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
            <div  style={{backgroundImage:`url(${texture})`,
                backgroundSize:"100% 100%",
                paddingTop:"70px",
                
                }}>
            <div className={classes.Seva} style={{backgroundImage:`url(${about})`,backgroundSize:"100% 100%"}}></div><br/><br/>
            <div style={{paddingTop:"50px"}} className="container">
                <Row>
                    <Col style={{display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",}} md={6} sm={12}>
                    <center><h2 data-aos="fade-up" style={{fontWeight:"bold",borderBottom:"2px solid #F8B864",paddingBottom:"20px"}}>Be the change</h2></center><br/>
                    <center><p data-aos="fade-up" style={{fontSize:"18px",fontWeight:"500"}}>
Brotherhood global foundation Trust the voice of a common man and it stands for the hunger and for poor persons rehabilitation. It helps society become a ray of hope for people in need. We Choose a cause that is close to your heart I:e all-natural calamities & nation crises and join hands with millions of donors like you who aim to make this world a better place.</p></center>
                    
                    </Col>
                    <Col  style={{display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",}} md={6} sm={12}>
                    <center><img style={{width:"100%",height:"100%"}} src={change}></img></center>
                </Col>
                </Row><br/><br/>
            </div>
            <div style={{paddingTop:"50px"}} className="container">
            <Row>
                <Col  style={{display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",}} md={6} sm={12}>
                    <center><img style={{width:"100%",height:"100%"}} src={child}></img></center>
                </Col>
                <Col style={{display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",
                paddingTop:"30px"}} md={6} sm={12}>
                    <center><h2 data-aos="fade-up" style={{fontWeight:"bold",borderBottom:"2px solid #F8B864",paddingBottom:"20px"}}>Child Welfare</h2></center><br/>
                    <center><p data-aos="fade-up" style={{fontSize:"18px",fontWeight:"500"}}>
                    Our major work based on Child Education, Child health, Save Girl Child, Girl Education, Women health care and education, Employment, Training, poor rehabilitation, Food & Nutrition, plantation, Serving old orphan people, public awareness etc.</p></center>
                    
                    </Col>
                </Row>
            </div>
            <div style={{display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",
                paddingTop:"50px"}} className="container">
                    <center><h2 data-aos="fade-up" style={{fontWeight:"bold",borderBottom:"2px solid #F8B864",paddingBottom:"20px"}}>Our Team</h2></center><br/>
                    <center><p data-aos="fade-up" style={{fontSize:"18px",fontWeight:"500"}}>We make a difference in the lives of people during a very traumatic time in their life.</p></center>
                     <br/><br/>
                     <Carousal/><br/><br/>
                     <br/><br/>
              
                     
                     
                 </div>
                 <Footer/>
            </div>
            
            
        </>
    )
}
export default About;