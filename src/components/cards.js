import React from "react";
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

function Cards(props) {
    return (
        <div class="container-fluid">
            <div class="container" style={{margin: "0!important", padding: '0!important'}}>
                <CardColumns>
                    {props.flags.map(item => (
                        <Card key={item.id} onClick={() => props.handleClick(item.id)} style={{ width: "14rem" }} className="p-0">
                            <Card.Img variant='top' src={item.image} alt='flag' style={{ height: "9rem" }}/>
                        </Card>
                    ))}
                </CardColumns>
            </div>
            
        </div>
    )
}

export default Cards;
/* <div className="card" key={item.id} onClick={() => props.handleClick(item.id)}>
<img src={item.image} alt="something" className="card-img-top" />
</div> */