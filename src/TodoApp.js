import React, { Component } from 'react';
import axios from 'axios';
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
    this.apiUrl = 'https://5ae5e18e36a18b00144e3955.mockapi.io/todos'
  }

  componentDidMount(){
    axios.get(this.apiUrl)
    .then((res) => {
      this.setState({data: res.data})
    })
  }

  addTodo(val){
    const todo = {text: val, id: window.id++};
    axios.post(this.apiUrl, todo)
    .then((res) => {
      this.state.data.push(res.data);
      this.setState({data: this.state.data})
    });
  }

  handleRemove(id){
    const remainder = this.state.data.filter((todo) => {
      if(todo.id !== id) return todo;
    });

    axios.delete(this.apiUrl + '/' + id)
    .then((res) => {
      this.setState({data: remainder});
    })
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
