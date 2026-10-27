import React from "react";
import './nav.css';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
function Navbar() {
    return(
        <>
    <Nav fill variant="tabs" defaultActiveKey="link-1">
        <h3>MediCare</h3>
        <Nav.Item>
            <Nav.Link eventKey="link-1"><Link to="/">Home</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2"><Link to="/About">About</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-3"><Link to="/booking">Booking</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-4"><Link to="/doctors">Doctors</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-5"><Link to="/departments">Departments</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-6"><Link to="/contact">Contact Us</Link></Nav.Link>
        </Nav.Item>

    </Nav>

    
    </>
    )

}
export default Navbar;