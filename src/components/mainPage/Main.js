import React, { Component } from 'react';
import logo from "../../assets/img/logo_transparent.png"
import { connect } from "react-redux";
import './Main.css';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

	render(){
		return(
      <header className="App-header">
      <div>
          <img src={logo} className="App-logo" alt="logo_transparent" width="250" height="400"/>
          <p>
            Reactivego ise a sample project with react and go.
          </p>
          <p><a
            className="App-link"
            href="https://tr.reactjs.org/"
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
		)
	}
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);