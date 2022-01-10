import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/c2logo.png';

//Navbar con Bootstrap
function NavBar() {
    return(
        <>
    <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">
            <img
            src={logo}
            width="100"
            className="d-inline-block align-top"
            alt="Logo"/>
        </Navbar.Brand>
            <Nav>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#acerca">¿Quiénes somos?</Nav.Link>
                <Nav.Link href="#blog">¿Sabías que?</Nav.Link>
                <Nav.Link href="#capacitaciones">Capacitaciones</Nav.Link>
                <Nav.Link href="#contacto">¡Hablemos!</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
</>);
} 

export default NavBar;