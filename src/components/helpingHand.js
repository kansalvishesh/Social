import React ,{useState} from "react";
import {Row,Col, Button,Modal} from "react-bootstrap";
import { Card } from 'antd';
import classes from "../CSS/helping.module.css";
import covid1 from "../assets/covid1.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const { Meta } = Card;

const HelpingHand = ()=>{
    Aos.init({duration:1000})
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2= () => setShow2(true);
    const handleClose3 = () => setShow3(false);
    const handleShow3= () => setShow3(true);
    return(
        <>
        <div  style={{backgroundColor:"#EBEBEB",backgroundSize:"100% 100%",paddingTop:"40px"}}>
            <div className="container" style={{display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",
                }}>
                    <center><h2 data-aos="fade-up" style={{fontWeight:"bold",borderBottom:"2px solid #F8B864",paddingBottom:"20px"}}>A Helping Hand</h2></center><br/>
                    <center><p data-aos="fade-up" style={{fontSize:"18px", fontWeight:"500"}}>Making a difference by extending a helping hand for a social cause is like prestidigitating the magic of highest prestige.</p></center>
            </div><br/><br/>
            <div className="container">
                 <Row>
                     <Col style={{display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",
                }} md={4} sm={6} xs={12}>
                     <Card
                        hoverable
                        style={{marginBottom:30}}
                        className={classes.Card}
                        cover={<img className={classes.Img} alt="example" src="https://firebasestorage.googleapis.com/v0/b/brotherhood-4b566.appspot.com/o/blog1.jpeg?alt=media&token=a46a6cba-e69a-42d7-9df3-3695916d4002" />}
                    >
                        <Meta title="A helping hand" description=
                        {
                        <div>
                            <p>A helping hand is a critical need ...</p>
                            <Button onClick={handleShow1} variant="outline-primary">Read More</Button>
                            <Modal show={show1} onHide={handleClose1}>
                                <Modal.Header closeButton>
                                <Modal.Title>A helping hand</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>A helping hand is a critical need of the elder who are destitute, sick and abandoned by family and those uprooted by disasters. Our team has been working for abandoned,old & aged people towards their rehabilitation.</Modal.Body>
                                <Modal.Footer>
                                <center><p style={{color:"blue",
                            cursor:"pointer"}} onClick={handleClose1}>Close</p></center>
                                
                                </Modal.Footer>
                            </Modal>

                        </div>
                        }
                        />
                        
                    </Card>
                     </Col>
                     <Col style={{display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",
                }} md={4} sm={6} xs={12}>
                     <Card
                        hoverable
                        style={{marginBottom:30}}
                        className={classes.Card}
                        cover={<img className={classes.Img} alt="example" src="https://firebasestorage.googleapis.com/v0/b/brotherhood-4b566.appspot.com/o/blog2.jpeg?alt=media&token=0a936f98-8e2b-482d-a6cf-99de2aeb140a" />}
                    >
                        <Meta title="During Fani" description={<div>
                            <p>During Fani, our team had worked ...</p>
                            <Button onClick={handleShow2} variant="outline-primary">Read More</Button>
                            <Modal show={show2} onHide={handleClose2}>
                                <Modal.Header closeButton>
                                <Modal.Title>During Fani</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>During Fani, our team had worked rigorously for 11 days right from the very next day. We reached out to people, distributed ration kits, warm clothes, medicines & sanitation equipment among the affected in Khordha district where there was no electricity & no water supply.</Modal.Body>
                                <Modal.Footer>
                                <center><p style={{color:"blue",
                            cursor:"pointer"}} onClick={handleClose2}>Close</p></center>
                                
                                </Modal.Footer>
                            </Modal>
                        </div>
                        }
                        />
                        
                    </Card>
                     </Col>
                     <Col style={{display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",
                }} md={4} sm={6} xs={12}>
                     <Card
                        hoverable
                        style={{marginBottom:30}}
                        className={classes.Card}
                        cover={<img className={classes.Img} alt="example" src="https://firebasestorage.googleapis.com/v0/b/brotherhood-4b566.appspot.com/o/blog3.jpeg?alt=media&token=3e69df7c-581d-4276-861f-431ee8f276ba" />}
                    >
                        <Meta title="COVID-19" description={<div>
                            <p>We are at the forefront of Covid-19 ....</p>
                            <Button onClick={handleShow3} variant="outline-primary">Read More</Button>
                            <Modal show={show3} onHide={handleClose3}>
                                <Modal.Header closeButton>
                                <Modal.Title>COVID-19</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>We are at the forefront of Covid-19 related relief efforts since April itself. We have distributed thousands of food packets, helped needy people with ration kits, masks and other contributions. We have even helped save lives during these tough times by helping poor accident victims get the best medical care possible.</Modal.Body>
                                <Modal.Footer>
                                <center><p style={{color:"blue",
                            cursor:"pointer"}} onClick={handleClose3}>Close</p></center>
                                
                                </Modal.Footer>
                            </Modal>
                        </div>
                        }
                        />
                        
                    </Card>
                     </Col>
                 </Row>
            </div>
            <br/><br/>
        </div>

        </>
    )
}
export default HelpingHand;