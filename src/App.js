import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App" style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h1>Simple TODO App</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo"
        style={{ padding: '8px', width: '70%' }}
      />
      <button onClick={addTodo} style={{ padding: '8px', marginLeft: '5px' }}>
        Add
      </button>

      <ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px' }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            {todo}{' '}
            <button onClick={() => deleteTodo(index)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
