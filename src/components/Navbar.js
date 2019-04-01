import React from "react";

function Navbar(props) {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="mr-auto text-white">
                <h1>Clicky Game!</h1>
            </div>
            <div className="mx-auto text-white">
                <span className="midHead"><h3>Click An Image To Begin!</h3></span>
            </div>
            <div className="ml-auto text-white">
                <h4>Score: {props.score} </h4>
                <h4>Top Score: {props.topScore}</h4>
            </div>
        </nav>
    )
}

export default Navbar;