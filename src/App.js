import React, { Component } from 'react';
import './App.css';

import Tomato from './containers/Tomato';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Header">
          <h2>Keep yourself productive with this iteration of Pomodoro</h2>
        </div>
        <div className="App-Container">
          <Tomato></Tomato>
        </div>
        <div className="App-Footer"></div>
      </div>
    );
  }
}

export default App;
