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
    clickSimpson: []
  };
  // On click event
  imageClicked = event => {
    const character = event.target.alt;
    const characterClickedTwice =
      this.state.clickSimpson.indexOf(character) > -1

    // Condition if already clicked
    if (characterClickedTwice) {
      this.setState({
        characters: this.state.characters.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickSimpson: [],
        score: 0
      })
    }
  }
// 
render() {
  return (
    <div>
      <NavBar />
      <div className="jumbotron">
        <h1 className="title">Click an image to begin!</h1>
        <h6>Click on an image to earn points, but don't click on any more than once!</h6>
        <p>If you do click on an image more than once, game will start over and shuffle the images.</p>
      </div>
      <Wrapper>
        {this.state.characters.map((data) =>
          <SimpsonsCard name={data.name} image={data.image} key={data.id} id={data.id} />
        )}
      </Wrapper>
    </div>
  );
}
}

// class App extends React.Component {
//   state = {
//     friends
//   }
//   removeFriend = id => {
//     const currentFriends = this.state.friends.filter(friend => friend.id !== id);

//     this.setState({ friends: currentFriends });
//   }
//   render() {

//     return (<Wrapper>
//       <h1 className="title">Friends List</h1>
//       {this.state.characters.map((data) =>
//         <SimpsonsCard image={data.image}
//         />
//       )}
//     </Wrapper>)
//   }
// };

export default App;
