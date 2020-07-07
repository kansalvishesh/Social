import React from "react";
import {Navbar, Nav, Button} from "react-bootstrap";
import classes from "../CSS/navbar.module.css";
import { NavLink} from "react-router-dom";

const CustomNavbar = ()=>{
    return(
        <>
        <div>
        <Navbar className="bg-transparent navbar-dark" className={classes.Navbar} expand="sm">
            <Navbar.Brand href="#home">
            <span> <img style={{width:"200px",height:"50px",marginLeft:"20px"}} src="https://firebasestorage.googleapis.com/v0/b/brotherhood-4b566.appspot.com/o/brotherhood-global-foundationns.png?alt=media&token=e91f6d6b-d923-4eb2-8b49-5292bf817a0f"/> </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <NavLink to="/"  className={classes.Link}><Nav  href="#home">Home</Nav></NavLink>
                <NavLink to="/about" activeClassName={classes.Selected}  className={classes.Link}><Nav href="#home">About</Nav></NavLink>
                <NavLink to="/blog" activeClassName={classes.Selected}  className={classes.Link}><Nav href="#home">Blog</Nav></NavLink>
                <NavLink to="/contact" activeClassName={classes.Selected}  className={classes.Link}><Nav href="#home">Contact</Nav></NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
        </>
    )
}
export default CustomNavbar;