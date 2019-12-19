import React, { Component } from 'react';
import './App.css';
import logo from "./logo_transparent.png"
import Header from './components/Header';
import ACTIONS from "./modules/action";
import { connect } from "react-redux";

class App extends Component {
  constructor(props){
    super(props);
    this.handleChangePage = this.handleChangePage.bind(this);

    this.state = {};
  }

  handleChangePage = () => {
    if(!this.props.isDemoPage){
      this.props.reactiveItem(true);
    }else{
      this.props.reactiveItem(false);
    }
  };

  rederMainPageComponents(){
    if(this.props.isDemoPage){
      return (
        <header className="App-header"></header>
      )
    }
    return( 
      <header className="App-header">
          <div>
              <img src={logo} className="App-logo" alt="logo_transparent" width="250" height="400"/>
              <p>
                Reactivego ise a sample project with react and go.
              </p>
              <p><a
                className="App-link"
                onClick={this.handleChangePage}
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

  render(){
    return (
      <div className="App"> 
        <Header/>
        {this.rederMainPageComponents()}
      </div>
    );
  }
  
}

const mapStateToProps = state => ({
  isDemoPage: state.isDemoPage
});

const mapDispatchToProps = dispatch => ({
  reactiveItem: item => dispatch(ACTIONS.reactiveItem(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);