import React from "react";
import {Row,Col} from "react-bootstrap"

const Orange = ()=>{
    return(
        <>
            <div style={{backgroundColor:"#FFA07A",backgroundSize:"100% 100%",minHeight:"450px",paddingTop:"20px",display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",
                }}>
            <div className="container">
                 <Row>
                     <Col style={{display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    flexDirection:"column",
                    }} md={4} sm={12}>
                        <i style={{backgroundColor:"white",color:"#FFA07A",
                    padding:"20px",borderRadius:"50%"}} class="fas fa-hand-holding-heart fa-4x"></i><br/>
                    <center><p style={{color:"white",fontSize:"24px"}} >Ration Kits Distributed</p></center>
                    <center><p style={{color:"white",fontSize:"32px",fontWeight:"800"}}>5900</p></center>
                     </Col>
                     <Col style={{display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    flexDirection:"column"}} md={4} sm={12}>
                        <i style={{backgroundColor:"white",color:"#FFA07A",
                    padding:"20px",borderRadius:"50%"}} class="fas fa-hand-holding-usd fa-4x"></i><br/>
                    <center><p style={{color:"white",fontSize:"24px"}} >Cash Help Extended</p></center>
                    <center><p style={{color:"white",fontSize:"32px",fontWeight:"800"}}>Rs 240654</p></center>
                     </Col>
                     <Col style={{display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    flexDirection:"column"}} md={4} sm={12}>
                        <i style={{backgroundColor:"white",color:"#FFA07A",
                    padding:"20px",borderRadius:"50%"}} class="fas fa-people-carry fa-4x"></i><br/>
                    <center><p style={{color:"white",fontSize:"24px"}} >People Provided Help</p></center>
                    <center><p style={{color:"white",fontSize:"32px",fontWeight:"800"}}>3565</p></center>
                     </Col>
                 </Row>
                 </div>
             </div>
        </>
    )
}
export default Orange;