import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Image from 'react-bootstrap/Image';

function Cards(props) {
    return (
        <div className="container">
                <CardColumns style={{padding: '0 45px 0 45px'}}>
                    {props.flags.map(item => (
                        <Card key={item.id} onClick={() => props.handleClick(item.id)} style={{ width: "100%", border:'none', background: 'transparent'}} className="p-0">
                            <Card.Img src={item.image} alt='flag' style={{ height: "20.5vh", width:'70%', marginLeft: '16%' }}/>
                        </Card>
                    ))}
                </CardColumns>
        </div>
    )
}

export default Cards;
/* <div className="card" key={item.id} onClick={() => props.handleClick(item.id)}>
<img src={item.image} alt="something" className="card-img-top" />
</div> */