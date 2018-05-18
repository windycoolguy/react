import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Parentword from './Parentword.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {label: 'ON'};
  }
  onClick=()=>{
    if (this.state.label=="ON"){
      this.setState({label:"OFF"});
    }else{
      this.setState({label:"ON"});
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Parentword name="JACK"/>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div class="App-btn">
          <button  type="button" onClick={this.onClick}> 
            {this.state.label} 
          </button>
        </div>
      </div>
    );
  }
}



export default App;

