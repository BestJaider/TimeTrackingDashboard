import React, { useState, useRef } from 'react';
import './styles.css'; // Importa el archivo CSS aquí

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [textInput, setTextInput] = useState('');
  const textInputFieldRef = useRef(null);

  const handleAddTodo = () => {
    const textInputValue = textInput.trim();

    if (textInputValue === '') return;

    const newTodo = {
      id: todos.length + 1,
      text: textInputValue,
      completed: false
    };

    setTodos([...todos, newTodo]);
    setTextInput('');
    textInputFieldRef.current.value = '';
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggleTodo = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    }));
  };

  return (
    <div className='bg-success text-center'>
      <input
        type="text"
        ref={textInputFieldRef}
        onChange={e => setTextInput(e.target.value)}
      />
      <button onClick={handleAddTodo}>Agregar</button>

      <div className="todos-container">
        {todos.map(todo => (
          <div
            className={`todo-item-container ${todo.completed ? 'completed' : ''}`}
            key={todo.id}
          >
            <p
              className="todo-text"
              onClick={() => handleToggleTodo(todo.id)}
            >
              {todo.text}
            </p>
            <button
              className="delete-button"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              <img src="./imagenes/delete.svg" alt="Delete" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
