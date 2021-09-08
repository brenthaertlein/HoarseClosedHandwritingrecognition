import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{color: "white"}} />
        <h1>
          Bird Generator!
        </h1>
      </header>
      <div class="footer">
        <p>
          Written in&nbsp;
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
