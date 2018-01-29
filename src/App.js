import React, { Component } from 'react';
import './App.css';

import Tomato from './containers/Tomato';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Header">
          <h1>Keep yourself productive with Pomodoro</h1>
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
