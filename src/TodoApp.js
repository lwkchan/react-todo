import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/todoForm'
import TodoList from './components/todoList'

class TodoApp extends Component {
  render() {
    return (
      <div>
        <TodoForm />
        <TodoList todos={[{id:999, text: 'text'}]}/>
      </div>
    );
  }
}

export default TodoApp;
