import React from "react";
import SimpsonsCard from "./components/SimpsonsCard";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import characters from "./characters.json";
import './App.css';


class App extends React.Component {
  state = {
    characters,
    score: 0,
    topScore: 0,
    clickSimpson: []
  };
  // On click id
  imageClicked = id => {
    console.log(id)
    let currentScore = this.state.score;
    let clickSimpson = this.state.clickSimpson;
    if (clickSimpson.indexOf(id) === -1) {
      console.log('notInArr')
      console.log(this.state.clickSimpson)
      clickSimpson.push(id);
      this.setState({
        clickSimpson,
        score: this.state.score + 1
      })
      if (currentScore === 12) {
        if (currentScore >= this.state.topScore) {
          this.setState({
            topScore: currentScore
          })
          alert(`You won! Click ok to start again.`)
        }
        let shuffledCharacters = this.shuffleArray(this.state.characters)
        this.setState({
          clickSimpson: [],
          score: 0,
          characters: shuffledCharacters
        })
      }

    } else {
      alert(`Sorry, you lose! Click ok to start again.`)
      if (currentScore >= this.state.topScore) {
        this.setState({
          topScore: currentScore
        })
      }
      let shuffledCharacters = this.shuffleArray(this.state.characters)
      this.setState({
        clickSimpson: [],
        score: 0,
        characters: shuffledCharacters
      })
    }
  };
  shuffleArray = array => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  render() {
    return (
      <div>
        <NavBar score={this.state.score} topScore={this.state.topScore} />
        <div className="jumbotron">
          <h1 className="title">Click an image to begin!</h1>
          <h6>Click on an image to earn points, but don't click on any more than once!</h6>
          <p>If you do click on an image more than once, game will start over and shuffle the images.</p>
        </div>
        <Wrapper>
          {this.state.characters.map((data) =>
            <SimpsonsCard name={data.name} image={data.image} key={data.id} id={data.id} imageClicked={this.imageClicked} />
          )}
        </Wrapper>
      </div>
    );
  }
}



export default App;
