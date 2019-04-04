import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import NavbarMessage from './NavbarMessage';

function Navbars(props) {
    return (
        <Navbar bg="light" variant="dark" expand="lg" sticky='top'>
            
                <Col>
                    <h3>Click-olas Cage Game!</h3>
                </Col>
                <Col >
                    <h4>Click An Image To Begin!</h4>
                </Col>
                <Col md='auto'>
                    <h4>Score: {props.score}/12 </h4>
                </Col>
            
        </Navbar>
    )
}

export default Navbars;