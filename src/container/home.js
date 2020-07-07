import React  from "react";
import classes from "../CSS/home.module.css";
import hunger from "../assets/hunger.jpg";
import seva from "../assets/seva.png";
import texture from "../assets/texture.jpg"
import {Row,Col} from "react-bootstrap";
import { Card } from 'antd';
import SmallHelp from "./small";
import Aos from "aos";
import "aos/dist/aos.css";
import CustomNavbar from "../components/navbar";

const Home = ()=>{
    Aos.init({duration:1000,
        })
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
            <div style={{backgroundImage:`url(${texture})`,
                backgroundSize:"100% 100%",
                }} >

                    <div style={{display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",}} className="container-fluid">
                    <Row>
                        <Col style={{display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",}} md={4} sm={12}>
                        <Card data-aos="flip-left" style={{marginBottom:"20px"}} hoverable={true} className={classes.Card}>
                            <div className="container">
                                <Row>
                                    <Col sm={5} style={{display:"flex",
                                        alignItems:"center",
                                        justifyContent:"center",
                                        flexDirection:"column",}}>
                                    <i style={{backgroundColor:"#104F67",color:"white",padding:"10%",borderRadius:"50%"}} class="fas fa-hands-helping fa-3x"></i>
                                    </Col>
                                    <Col sm={7} >
                                        <div className="container">
                                            <center><h3 style={{color:"#F8BD6F",fontWeight:"bold"}}>MISSION</h3></center>
                                            <center><p>To eradicate hunger and poverty.</p></center>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Card>
                        </Col>
                        <Col style={{display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",}} md={4} sm={12}>
                        <Card data-aos="flip-left" style={{marginBottom:"20px"}} hoverable={true} className={classes.Card} >
                            <div className="container">
                                <Row>
                                    <Col sm={5} style={{display:"flex",
                                        alignItems:"center",
                                        justifyContent:"center",
                                        flexDirection:"column",}}>
                                    <i style={{backgroundColor:"#29BFA4",color:"white",padding:"10%",borderRadius:"50%"}} class="far fa-lightbulb fa-3x"></i>
                                    </Col>
                                    <Col sm={7} >
                                        <div className="container">
                                            <center><h3 style={{color:"#F8BD6F",fontWeight:"bold"}}>VISION</h3></center>
                                            <center><p>A world full of people devoid of miseries and pain.</p></center>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Card>
                        </Col>
                        <Col style={{display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",}} md={4} sm={12}>
                        <Card data-aos="flip-left" style={{marginBottom:"20px"}} hoverable={true} className={classes.Card}>
                            <div className="container">
                                <Row>
                                    <Col sm={5} style={{display:"flex",
                                        alignItems:"center",
                                        justifyContent:"center",
                                        flexDirection:"column",}}>
                                    <i style={{backgroundColor:"#0BA0DB",color:"white",padding:"10%",borderRadius:"50%"}} class="fas fa-praying-hands fa-3x"></i>
                                    </Col>
                                    <Col sm={7} >
                                        <div className="container">
                                            <center><h3 style={{color:"#F8BD6F",fontWeight:"bold"}}>MOTO</h3></center>
                                            <center><p>We rise by lifting others.</p></center>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Card>
                        </Col>
                    </Row>
                    <br/><br/>
                    <div className="container" style={{display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",
                }}>
                        <center><h2 data-aos="fade-up" style={{fontWeight:"bold",borderBottom:"2px solid #F8B864",paddingBottom:"20px"}}>MOTIVE</h2></center>
                        <br/>
                        <center><p data-aos="fade-up" style={{fontSize:"18px",fontWeight:"500"}}>The only way to do great work is to love what you do & the most important thing within our team is to work wholeheartedly. A single act of kindness is like a drop of water on a dessert affecting more than the original need. The smallest act of kindness is worth more than the grandest intention. And our team inspired by Utkal Mani Gopabandhu Das.</p></center>
                    </div>
                    <br/><br/>
                    
                </div>
                <div className={classes.Seva} style={{backgroundImage:`url(${seva})`,backgroundSize:"100% 100%"}}></div><br/><br/>
            </div>
            <SmallHelp/>
            
                

        </>
    )
}
export default Home
//"height:1000px;background-stcolor:red;font-size:36px"