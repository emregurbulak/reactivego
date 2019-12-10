import React from 'react';
import './App.css';
import logo from "./logo_transparent.png"
import Header from './components/Header';

function App() {
  return (
    <div className="App"> 
      <Header/>
      <header className="App-header">
        <div>
            <img src={logo} className="App-logo" alt="logo_transparent" width="250" height="400"/>
            <p>
              Reactive go ise a sample project with react and go.
            </p>
            <p><a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a></p>
            <p><a
              className="App-link"
              href="https://golang.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Golang
            </a></p>
        </div>  
      </header>
    </div>
  );
}

export default App;


/* 

        

*/