import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Users from './components/Users';
import Todos from './components/Todos';

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <h1>My React App (hamza rehman)</h1>
        <nav className="mb-3">
          <Link to="/users" className="btn btn-primary me-2">Users</Link>
          <Link to="/todos" className="btn btn-secondary">Todos</Link>
        </nav>
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
