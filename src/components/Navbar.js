import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import NavbarMessage from './NavbarMessage';

function Navbars(props) {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" style={{ color: "white"}}>
            <Container class="fluid">
                <Col md='auto'>
                    <h1>Clicky Game!</h1>
                </Col>
                <Col md='auto'>
                    {/* <NavbarMessage /> */}
                </Col>
                <Col md='auto'>
                    <h4>Score: {props.score} </h4>
                    <h4>Top Score: {props.topScore}</h4>
                </Col>
            </Container>
        </Navbar>
    )
}

export default Navbars;