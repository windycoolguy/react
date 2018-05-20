import React, { Component } from 'react';
import './Todolist.css'


class ListComp extends Component {
  
  constructor(props) {
	  super(props);
	  this.state = {listitems : props.content,list : ""};
	  
  }
  addItem =() => {
    const {listitems:temp} = this.state;
    temp.push(this.state.list);
  	this.setState({listitems: temp});
  }
  handleInputtingText = (e) => {
    this.setState({ list: e.target.value });
  }
  render() {
  	const listItems = this.state.listitems.map((number,i) =>
	    <li key={i}>
	      {number}
	    </li>
	  );

    return (
      <div>
        <input type="text" id="i-input" placeholder="input any text" onChange={this.handleInputtingText}/>
        <input type="button" id = "i-button" value="Submit" onClick={this.addItem} />
  	    <ul>{listItems}</ul>
      </div>
	  );
  }
}

export default ListComp;