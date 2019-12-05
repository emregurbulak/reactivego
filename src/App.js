import React from 'react';
import './App.css';
import logo from "./logo_transparent.png"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo_transparent" width="250" height="400"/>
        <p>
          Reactive go ise a sample project with react and go.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https://golang.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Golang
        </a>
      </header>
    </div>
  );
}

export default App;
