import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
//import Group from './Group';
import Todolist from './Todolist';

class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = {items : []};
  }

  render() {
    return (
      <div className="App">
        <Todolist content={this.state.items}/>
      </div>
    );
  }
}

export default App;
