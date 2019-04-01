import React, {Component} from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/cards";
import flags from "./images.json";

class App extends Component {
    state = {
        flags,
        score: 0,
        topScore: 0,
        clicked: []
    };

    render() {
        return (
            <div className="container-fluid">
                <Navbar score={this.state.score} topScore={this.state.topScore}/>
                <section className="jubotron-fluid">
                    <Cards flags={this.state.flags}/>
                </section>
            </div>
        )
    }
    
}

export default App;