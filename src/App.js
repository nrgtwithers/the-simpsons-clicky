import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <div className="nav-wrapper">
            <a href="www.google.com" className="brand-logo">The Simpsons</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {/* <li><h6>Click an image to begin game!</h6></li> */}
              <li>Score: 0 </li>
              <li> | </li>
              <li>Top Score: 0</li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
