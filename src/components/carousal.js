import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card } from 'antd';
import classes from "../CSS/carousal.module.css";

const { Meta } = Card;

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 750 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 2
    }
  };
const Carousal =()=>{
    return(
        <>
           <div className={classes.ContainerDiv} className="container">
           <Carousel 
           
           autoPlay={true}
           showDots={true}
           autoPlaySpeed={2000}
           infinite={true}
           responsive={responsive}>
                <div>
                <Card
                        hoverable
                        style={{marginBottom:30}}
                        className={classes.Card}
                        cover={<img alt="example" src="https://firebasestorage.googleapis.com/v0/b/brotherhood-4b566.appspot.com/o/team1.jpg?alt=media&token=bc686bb9-c831-418e-a88f-6246a2eb655b" />}
                    >
                        <Meta title="Sanjit Senapati" description="Managing Trusty" />
                    </Card>
                </div>
                <div>
                <Card
                        hoverable
                        style={{marginBottom:30}}
                        className={classes.Card}
                        cover={<img alt="example" src="https://firebasestorage.googleapis.com/v0/b/brotherhood-4b566.appspot.com/o/team2.jpg?alt=media&token=f21cae02-2208-4c54-8b99-1c65c7438de6" />}
                    >
                        <Meta title="Satyajit Senapati" description="Founder" />
                    </Card>
                </div>
                <div>
                <Card
                        hoverable
                        style={{marginBottom:30}}
                        className={classes.Card}
                        cover={<img alt="example" src="https://firebasestorage.googleapis.com/v0/b/brotherhood-4b566.appspot.com/o/team3.jpg?alt=media&token=27caa02d-557e-4bd1-b473-8e49d23c74ca" />}
                    >
                        <Meta title="Sujit Senapati" description="Trusty" />
                    </Card>
                </div>
                
            </Carousel><br/><br/>
           </div>
        </>
    )
}
export default Carousal;