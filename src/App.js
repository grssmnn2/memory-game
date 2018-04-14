import React, { Component } from "react";
import Character from "./components/Character";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import character from "./characters.json";
import user from "./user.json";
import "./App.css";
const Shuffle = window.Shuffle;

class App extends Component {
  // Setting this.state.characters to character json array
  state = {
    character,
    user:0,
    score: 0,
    highScore: 0
  };

  // on click, give character a score of 1. if anyone's click score = 2, game over,
  // otherwise keep adding points to user score and character score
  rememberCharacter = event => {
  //   shuffle = array => {
  //     for (var i = array.length - 1; i > 0; i--) {
  //         var j = Math.floor(Math.random() * (i + 1));
  //         var temp = array[i];
  //         array[i] = array[j];
  //         array[j] = temp;
  //     }
  // }

  // shuffle(Character);
    if(this.state.score === 2){
      this.state.score = 0;
      this.state.user = 0;
      console.log("GAME OVER");
    }else{
      this.state.score++;
      this.state.user++;
      console.log(`card score: ${this.state.score}`);
      console.log(`highScore: ${this.state.highScore}`);
      console.log(`User Score: ${this.state.user}`);
    }

    if(this.state.user > this.state.highScore){
      this.setState({
        highScore: this.state.user
      });
    };
  
  };
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Click a Character once to increase your score.
          Twice, you lose.</Title>
          <h4>Current Score: {this.state.user}</h4>
          <h4>Highest Score: {this.state.highScore}</h4>
          {/* map over all characters and display name and image */}
        {this.state.character.map(character => (
          <Character
            rememberCharacter={this.rememberCharacter}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            score={character.score}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
