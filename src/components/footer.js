import React from "react";
import {Row,Col} from "react-bootstrap"
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
 
const Footer=()=>{
    Aos.init({
        duration:2000,
        disable: 'mobile'
    })
    return(
        <>
        <div style={{backgroundColor:"#A4A5A1",backgroundSize:"100% 100%",minHeight:"450px",paddingTop:"20px",display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",
                }}>
            <div className="container">
                    <Row>
                        <Col md={4} sm={6} xs={12}>
                            <center><h3><img data-aos="fade-up" style={{width:"230px"}} src="https://firebasestorage.googleapis.com/v0/b/brotherhood-4b566.appspot.com/o/brotherhood-global-foundation1.png?alt=media&token=eecf5817-4877-4790-a993-96f70bc261ad"/></h3></center>
                            <center><p style={{fontSize:"18px",fontWeight:"400"}}>All of the operational models are based on constantly escalating happy smiles through healthy teamwork and our rigorous effort towards service to our society.</p></center>
                        </Col>
                        <Col md={4} sm={6} xs={12}>
                            <center><h3>Navigation</h3></center>
                            <center>
                                <p>
                                <Link to="/" style={{fontSize:"18px",fontWeight:"400",color:"#393A38",margin:"3px"}}>Home</Link>
                                <Link to="/about" style={{fontSize:"18px",fontWeight:"400",color:"#393A38",margin:"3px"}}>About</Link>
                                <Link to="/contact" style={{fontSize:"18px",fontWeight:"400",color:"#393A38",margin:"3px"}} >Contact</Link>
                                <Link to="/blog" style={{fontSize:"18px",fontWeight:"400",color:"#393A38",margin:"3px"}} >Blog</Link>
                                </p>
                            </center>
                        </Col>
                        <Col md={4} sm={6} xs={12}>
                        <center><h3  data-aos="fade-up">Address</h3></center>
                        <center><p style={{fontSize:"18px",fontWeight:"400"}}> Plot . 2902/ 4941
                            Nageswar tangi

                            Bhubaneswar

                            Pin . 751002 Khordha , odisha

                            phone:-7205919818

                            email:- info@brotherhoodgft.org</p>
                        </center>
                        </Col>
                    </Row>

            </div>
        </div>
        <div style={{backgroundColor:"#5C5D5B",backgroundSize:"100% 100%",minHeight:"100px",paddingTop:"20px" ,
        paddingBottom:"0px",paddingLeft:"20px",paddingRight:"20px"
        
                }}>
                    <Row>
                        <Col md={6} sm={12}>
                        <p style={{textAlign:"left",fontWeight:"700"}}>@ 2020 Brotherhood. All Right Reserved.</p>
                        </Col>
                        <Col md={6} sm={12}>
                        <p style={{textAlign:"right"}}>
                    <i style={{color:"#37B1E1",marginRight:"5px"}} class="fab fa-twitter-square fa-2x"></i>
                    <i style={{color:"#4B69B0",marginRight:"5px"}} class="fab fa-facebook fa-2x"></i>
                    <i style={{color:"#2BA63A",marginRight:"5px"}} class="fab fa-whatsapp-square fa-2x"></i>

                    </p>
                        </Col>
                    </Row>

        </div>

        </>
    )
}
export default Footer;