import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const Todos = (props) => {
  let todoItems;

  if (props.todos) {
    todoItems = props.todos.map((todo) => {
      return (
        <TodoItem key={todo.id} todos={todo} />
      );
    });

    return (
      <div className='todos'>
        <h1>Todos List</h1>
        {todoItems}
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array
}

export default Todos;
