import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
  let { title, id } = props.todos;
  return (
    <li>
      {title}
      <strong>-</strong>
      {id}
    </li>
  );
}

TodoItem.propTypes = {
  todos: PropTypes.object
}

export default TodoItem;
