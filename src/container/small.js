import React from "react";
import covid1 from "../assets/covid1.jpg";
import covid2 from "../assets/covid2.jpg";
import {Row,Col} from "react-bootstrap";
import { Card } from 'antd';
import classes from "../CSS/small.module.css";
import Carousal from "../components/carousal";
import HelpingHand from "../components/helpingHand";
import Collage from "../components/collage";
import Orange from "../components/orange";
import Footer from "../components/footer";
import Aos from "aos";
import "aos/dist/aos.css";

const { Meta } = Card;

const SmallHelp = ()=>{
    Aos.init({duration:1000,
        disable: window.innerWidth < 600})
    return(
        <>
             <div style={{backgroundColor:"#EBEBEB",backgroundSize:"100% 100%",paddingTop:"40px"}}>
                 <div className="container" style={{display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",
                }}>
                    <center><h2 data-aos="fade-up" style={{fontWeight:"bold",borderBottom:"2px solid #F8B864",paddingBottom:"20px"}}>A Small Help</h2></center><br/>
                    <center><p data-aos="fade-up" style={{fontSize:"18px", fontWeight:"500"}}>Brotherhood global foundation Trust has created a revolution among youngsters, which not only based on ethics but also added value and believing in our culture and tradition also.</p></center>
                 </div><br/><br/>
                 <div className="container">
                 <Row>
                     <Col style={{display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",}}  md={3} sm={6} xs={12}>
                     <Card
                        hoverable
                        style={{marginBottom:30}}
                        className={classes.Card}
                        cover={<img alt="example" src={covid1} />}
                    >
                        <Meta title="COVID-19 Relief Services" description="In Bhubaneswar at Forest Park." />
                    </Card>
                     </Col>
                     <Col style={{display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",}}  md={3} sm={6} xs={12}>
                     <Card
                        hoverable
                        style={{marginBottom:30}}
                        className={classes.Card}
                        cover={<img alt="example" src={covid1} />}
                    >
                        <Meta title="COVID-19 Relief Services" description="In Bhubaneswar at Ekamra Vihar." />
                    </Card>
                     </Col>
                     <Col style={{display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",}}  md={3} sm={6} xs={12}>
                     <Card
                        hoverable
                        style={{marginBottom:30}}
                        className={classes.Card}
                        cover={<img alt="example" src={covid1} />}
                    >
                        <Meta title="COVID-19 Relief Services" description="In Bhubaneswar at Bapuji Nagar." />
                    </Card>
                     </Col>
                     <Col style={{display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",}}  md={3} sm={6} xs={12}>
                     <Card
                        hoverable
                        style={{marginBottom:30}}
                        className={classes.Card}
                        cover={<img alt="example" src={covid1} />}
                    >
                        <Meta title="COVID-19 Relief Services" description="In Bhubaneswar at A G Colony." />
                    </Card>
                     </Col>
                 </Row>
                 </div>
                 <div className="container">
                 <Row>
                     <Col style={{display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",}}  md={3} sm={6} xs={12}>
                     <Card
                        hoverable
                        style={{marginBottom:30}}
                        className={classes.Card}
                        cover={<img alt="example" src={covid2} />}
                    >
                        <Meta title="COVID-19 Relief Services" description="In Bhubaneswar at Forest Park." />
                    </Card>
                     </Col>
                     <Col style={{display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",}}  md={3} sm={6} xs={12}>
                     <Card
                        hoverable
                        style={{marginBottom:30}}
                        className={classes.Card}
                        cover={<img alt="example" src={covid2} />}
                    >
                        <Meta title="COVID-19 Relief Services" description="In Bhubaneswar at Ekamra Vihar." />
                    </Card>
                     </Col>
                     <Col style={{display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",}}  md={3} sm={6} xs={12}>
                     <Card
                        hoverable
                        style={{marginBottom:30}}
                        className={classes.Card}
                        cover={<img alt="example" src={covid2} />}
                    >
                        <Meta title="COVID-19 Relief Services" description="In Bhubaneswar at Bapuji Nagar." />
                    </Card>
                     </Col>
                     <Col style={{display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",}}  md={3} sm={6} xs={12}>
                     <Card
                        hoverable
                        style={{marginBottom:30}}
                        className={classes.Card}
                        cover={<img alt="example" src={covid2} />}
                    >
                        <Meta title="COVID-19 Relief Services" description="In Bhubaneswar at A G Colony." />
                    </Card>
                     </Col>
                 </Row>
                 </div><br/><br/>
                 <div style={{display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",}} className="container">
                    <center><h2 data-aos="fade-up" style={{fontWeight:"bold",borderBottom:"2px solid #F8B864",paddingBottom:"20px"}}>Our Team</h2></center><br/>
                    <center><p data-aos="fade-up" style={{fontSize:"18px",fontWeight:"500"}}>We make a difference in the lives of people during a very traumatic time in their life.</p></center>
                     <br/><br/>
                     <Carousal/><br/><br/>
                     
                     
                 </div>
                 <Orange/><br/><br/><br/>
                 <HelpingHand/>
                 <Collage/><br/><br/>
                 <Footer/>
             </div>
            
             

        </>
    )
}
export default SmallHelp;