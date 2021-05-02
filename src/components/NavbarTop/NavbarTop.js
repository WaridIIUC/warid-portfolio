import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import {HashLink as Link } from 'react-router-hash-link';
import './NavbarTop.css'

const NavbarTop = () => {
    return (
        <div>
            <Navbar  expand="lg">
                <Navbar.Brand href="#home">Warid</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-5 mt-3">
                        <Nav.Link href="/home" className = "nav-font">Home</Nav.Link>
                        <Nav.Link href="/resume" className = "nav-font">Resume</Nav.Link>
                        <Link smooth to = "/home#projects" className = "nav-font  mt-2">Project</Link>
                        <Link smooth to = "/home#blogs" className = "nav-font  mt-2">Blogs</Link>     
                        <Nav.Link href="#link" className = "nav-font">Contact</Nav.Link>      
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavbarTop;