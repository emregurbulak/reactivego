import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/mainPage/Main';
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
      <Main/>
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