import React from "react";

function Cards (props) {
    return(
        <div>
            {props.flags.map(item => (
                <div className="card" style={{width: "15rem"}} key={item.id}>
                    <img src={item.image} alt="something" className="card-img-top"/>
                </div>
            ))}
        </div>
    )
}

export default Cards;