import React from 'react';

const TodoForm = ({addTodo}) => {

  let input;
  // input tracker
  return (
    // JSX
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        addTodo(input.value);
        input.value = '';
      }}>
        +
      </button>
    </div>
  );
};

export default TodoForm;
