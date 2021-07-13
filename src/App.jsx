import React, { useState } from 'react';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  function handleRemoveTodo(index) {
    setTodos((todos) => todos.filter((_todo, _index) => _index !== index));
  }

  function handleAddTodo(event) {
    event.preventDefault();

    const text = event.target.text.value;

    if (!text || todos.includes(text)) return;

    setTodos((todos) => todos.concat(text));

    event.target.text.value = '';
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input id="text" name="text" type="text" />
        <button>Add todo</button>
      </form>
      <ul>
        {todos.map((element, index) => (
          <li key={element}>
            {element}
            <button
              disabled
              type="button"
              onClick={() => handleRemoveTodo(index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
