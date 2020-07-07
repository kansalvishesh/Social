import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import classes from "../CSS/routes.module.css";
import hunger from "../assets/hunger.jpg";
import texture from "../assets/texture.jpg"
import CustomNavbar from "../components/navbar";
import HelpingHand from "../components/helpingHand";
import Collage from "../components/collage";
import Footer from "../components/footer";

const Blog=()=>{
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
                    <HelpingHand/>
                 <Collage/><br/><br/>
                 <Footer/>
                </div>
        </>
    )
}
export default Blog;