import React from 'react';
import TodoList from './Todo/TodoList';

const todosList = [
  { firstName: 'Andrew', lastName: 'Pike', role: 'husband', age: 48 },
  { firstName: 'Julia', lastName: 'Pike', role: 'wife', age: 45 },
  { firstName: 'Danil', lastName: 'Grinin', role: 'child', age: 22 },
  { firstName: 'Maria', lastName: 'Pike', role: 'child', age: 18 },
  { firstName: 'Natalia', lastName: 'Pike', role: 'child', age: 12 },
];

function App() {
  return (
    <div className="app-wrapper">
      <h1>React Sandbox</h1>
      My family:
      <TodoList todos={todosList} />
    </div>
  );
}

export default App;
