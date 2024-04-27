import React, { useState } from 'react';
import TodoList from './components/todoList';
import { FaPlus } from 'react-icons/fa';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };
  const handleAddTodo = () => {
    if (inputValue.trim() === '') {
      alert('bir is  elave edin!');
      return; 
    }
  
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text: inputValue,
        completed: false
      }
    ]);
    setInputValue('');
  };

  const toggleTodo = id => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
    alert("ugurla silindi");
    return;
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a new todo"
        />
        <button onClick={handleAddTodo}>
          <FaPlus />
        </button>
      </div>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
