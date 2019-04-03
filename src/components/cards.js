import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Cards(props) {
    return (
        <Row>
            {props.flags.map(item => (
                <Col md={3}>
                    <div className="card" style={{ width: "15rem" }} key={item.id}>
                        <img src={item.image} alt="something" className="card-img-top" />
                    </div>
                </Col>
            ))}
        </Row>
    )
}

export default Cards;