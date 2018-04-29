import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/todoForm'
import TodoList from './components/todoList'
import Title from './components/title'

window.id = 0;
class TodoApp extends Component {
  constructor(props){
    // Pass props to parent class
    super(props);
    this.state = {
      data: []
    }
  }

  addTodo(val){
    const todo = {text: val, id: window.id++};
    this.state.data.push(todo);
    this.setState({data: this.state.data});
  }

  handleRemove(id){
    const remainder = this.state.data.filter((todo) => {
      if(todo.id !== id) return todo;
    });

    this.setState({data: remainder})
  }

  render() {
    return (
      <div>
        <Title />
        <TodoForm addTodo={this.addTodo.bind(this)} />
        <TodoList
           todos = {this.state.data}
           remove = {this.handleRemove.bind(this)}
         />
      </div>
    );
  }
}

export default TodoApp;
