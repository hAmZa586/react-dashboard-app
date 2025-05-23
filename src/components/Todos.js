import React, { useEffect, useState } from 'react';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);

  return (
    <div>
      <h2>Todos</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Title</th><th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {todos.slice(0, 20).map(todo => (
            <tr key={todo.id}>
              <td>{todo.title}</td><td>{todo.completed ? '✅' : '❌'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todos;
