import React from 'react';

export default function TodoItem(props) {
  return (
    <li>
      {props.todo.firstName} {props.todo.lastName}
      &nbsp;is a
      {props.todo.role} at age {props.todo.age}.
    </li>
  );
}