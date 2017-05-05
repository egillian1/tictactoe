import React, { Component } from 'react';
import smiley from './smiley.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={smiley} className="App-logo" alt="logo" />
          <h2>Listen to the Chair Leg of Truth!</h2>
        </div>
        <p className="App-intro">
          It does not lie!
        </p>
      </div>
    );
  }
}

export default App;
