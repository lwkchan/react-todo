import React from 'react';
import Todo from './todo';

const TodoList = ({todos, remove}) => {
	const todoNode = todos.map((todo) => {
		return (<Todo todo={todo} key={todo.id} remove={remove}/>)
	});
	return (<ul>{todoNode}</ul>);
}

export default TodoList;
