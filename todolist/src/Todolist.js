import React, { Component } from "react";
import "./Todolist.css";
import TodoItems from "./TodoItems";
 
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
          };
        this.addItem = this.addItem.bind(this);
    }
    addItem(e){
        console.log(this._inputElement.value);
        if (this._inputElement.value !== "") {
            var newItem = {
              text: this._inputElement.value,
              key: Date.now()
            };
         
            // this.setState((prevState) => {
            //   return { 
            //     items: prevState.items.concat(newItem) 
            //   };
            // });
            this.setState({items: this.state.items.concat(newItem)})
           
            this._inputElement.value = "";
          }
           
          console.log(this.state.items);
             
          e.preventDefault();
    }
    render() {
        return (
          <div className="todoListMain">
            <div className="header">
              <form onSubmit={this.addItem}>
                <input ref={(a) => this._inputElement = a} 
                        placeholder="input letters">
                </input>
                <button type="submit">Submit</button>
              </form>
            </div>
            <TodoItems entries={this.state.items}/>
          </div>
        );
      }
}
 
export default TodoList;