import React from 'react';
import { FaTrash } from 'react-icons/fa';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
      />
      <span className={`text ${todo.completed ? 'completed' : ''}`}>
        {todo.text}
      </span>
      <button onClick={handleDelete}>
        <FaTrash />
      </button>
    </li>
  );
};

export default TodoItem;
