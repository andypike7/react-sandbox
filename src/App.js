import React from 'react';
import TodoList from './Todo/TodoList';

const todosList = [
  { firstName: 'Andy', lastName: 'Pike', role: 'husband', age: 48 },
  { firstName: 'July', lastName: 'Pike', role: 'wife', age: 45 },
  { firstName: 'Danil', lastName: 'Grinin', role: 'child', age: 22 },
  { firstName: 'Mary', lastName: 'Pike', role: 'child', age: 18 },
  { firstName: 'Nataly', lastName: 'Pike', role: 'child', age: 12 },
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
