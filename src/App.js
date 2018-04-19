import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {
  state = {
    userInput: ""
  }

deleteCharHandler = (index) => {
  const text = this.state.userInput.split('');
  text.splice(index,1);
  const updatedText = text.join('');
  this.setState({userInput: updatedText});
}

inputChangeHandler = (event) =>{
  this.setState({userInput: event.target.value});
}

  render() {
    const charlist = this.state.userInput.split('').map((char, index) =>{
      return <Char
        character={char}
        key={index}
        clicked={() =>this.deleteCharHandler(index)} />
    });
    return (
      <div className="App">
        <h1>Enter a Sentence</h1>
        <hr />
      <input
        type="text"
        onChange={this.inputChangeHandler}
        value={this.state.userInput} />
      <p>{this.state.userInput}</p>
      <p>(must be longer than 10 characters)</p>
      <h3><Validation inputLength={this.state.userInput.length}/></h3>
      {charlist}
    </div>
    );
  }
}

export default App;
