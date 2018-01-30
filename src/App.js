import React, { Component } from 'react';
import './App.css';

import Tomato from './containers/Tomato';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Header">
          <h1>Tomato <span role="img" aria-label="tomato">🍅</span> Tomato</h1>
          <h3>Stay productive with Pomodoro!</h3>
        </div>
        <div className="App-Container">
          <Tomato></Tomato>
        </div>
        <div className="App-Footer">

      </div>
      </div>
    );
  }
}

export default App;
