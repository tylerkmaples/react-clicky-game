import React, { Component } from "react";
import Navbars from "./components/Navbar";
import Cards from "./components/cards";
import flags from "./images.json";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
class App extends Component {
    state = {
        flags,
        score: 0,
        clicked: false,
        message: "Click Any To Start",
        clickedArr: []
    };

    // on component did mount shuffle array
    componentDidMount() {
        this.shuffle();
    };

    // shuffle flags
    shuffle() {
        // .sort uses MergeSort alg.
        //  O(n log n) with O(n) for memory
        let newArr = this.state.flags.sort(function () { return 0.5 - Math.random() });
        this.setState({
            flags: newArr
        })
    };

    //  reset the game
    reset = () => {
        this.setState({
            score: 0,
            clicked: false,
            message: 'You Clicked the same Cage. Try Again!',
            clickedArr: []
        })
    };

    // create a function that will be triggered on click on a card pass the function into the Cards component
    // the function should accept a single value of the card id 
    handleClick = id => {
        console.log(id)
        // this.state.clickedArr.push(id);
        console.log(this.state.clickedArr);
        if (this.state.clickedArr.includes(id)) {
            this.reset();
            this.shuffle();
        }
        else {
            this.state.clickedArr.push(id)
            this.setState({ score: this.state.score + 1})
            this.shuffle();
            this.setState({ message: 'Correct' })
        }
        // check if clicked item "clicked key" is false
        // set clicked item clicked to true 
        // user clicked correct - create a function to handle correct clicks
        // if "clicked key" is true already user clicked incorrect - create a function to handle incorrect clicks
    };


    render() {
        return ( 
            <div className="container-fluid px-0" style={{backgroundImage: `url(assets/images/footer_lodyas.png)`}}>
                <Navbars score={this.state.score} message={this.state.message} />
                <Container fluid style={{height: "40vh", background: 'none'}}>
                    <div style={{textAlign: 'center', color: 'white', marginTop: '150px'}}>
                        <h1>Click-olas Cage Game!</h1>
                        <h3>Click on an image to gain points, but don't click an image more than once.</h3>
                    </div>
                    
                </Container>
                <Cards flags={this.state.flags} handleClick={this.handleClick} />
            </div>
        )
    }

}

export default App;