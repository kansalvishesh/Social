import React from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import  photos from "./photos";
import Aos from "aos";
import "aos/dist/aos.css";


const Collage=()=>{
    Aos.init({duration:1000})
    return(
        <>
            <div style={{backgroundColor:"#EBEBEB",backgroundSize:"100% 100%",paddingTop:"40px"}}>
            <div className="container" style={{display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",
                }}>
                    <center><h2 data-aos="fade-up" style={{fontWeight:"bold",borderBottom:"2px solid #F8B864",paddingBottom:"20px"}}>Major Works</h2></center><br/>
                    <center><p data-aos="fade-up" style={{fontSize:"18px", fontWeight:"500"}}>Our major work based on Child Education, Child health, Save Girl Child, Girl Education, Women health care and education, Employment, Training, poor rehabilitation, Food & Nutrition, plantation, Serving old orphan people, public awareness etc.</p></center>
                 </div><br/><br/>
            <Gallery photos={photos} />;
            </div>
        </>
    )
}
export default Collage