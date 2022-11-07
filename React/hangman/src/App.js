import React, { Component } from 'react';
import './App.css';
import Solution from './components/Solution';
import Score from './components/Score';
import Letters from './components/Letters';

class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: {
        word: "CALM",
        hint: "Your ideal mood when coding."
      },
      score: 100,
      endGame: false
    }
  }

  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }

  selectLetter = (letter) => {
    let newScore = this.state.score;
    newScore = (this.state.solution.word.includes(letter)) ? newScore + 20 : newScore - 5
    let newLetters = JSON.parse(JSON.stringify(this.state.letterStatus));
    newLetters[letter] = true;

    this.setState({
      letterStatus: newLetters,
      score: newScore
    }, this.checkForEndGame)
  }

  checkForEndGame = () => {
    let endGame = false;
    if (this.state.score <= 0 || !Object.values(this.state.letterStatus).includes(false)) {
      endGame = `You Lost! The word was ${this.state.solution.word}.`;
    } else {
      const word = this.state.solution.word;
      for (let i = 0; i < word.length; i++) {
        if (!this.state.letterStatus[word[i]]) {
          return;
        }
      }
    }
    if (!endGame){
      endGame = "Congratulations"
    }
    this.setState({
      endGame
    }, this.render)
    
  }

  getScoreClass = () => {
    let score = this.state.score;
    if (score > 80) {
      return "high-score";
    }
    else if (score < 50) {
      return "low-score";
    }
    return "medium-score";
  }


  render() {
    let scoreClass = this.getScoreClass();
    if (this.state.endGame != false){
      return <div>{this.state.endGame}</div>
    }
    return (
      <div>
        <Score class={scoreClass} score={this.state.score} />
        <Solution solution={this.state.solution} letterStatus={this.state.letterStatus} />
        <Letters selectLetter={this.selectLetter} letterStatus={this.state.letterStatus} />
      </div>
    );
  }
}

export default App;
