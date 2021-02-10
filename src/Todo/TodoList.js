import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    color: 'yellow',
  },
};

function onChange(seq) {
  console.log(`Checkbox #${seq} is clicked!`);
}

function TodoList({ todos }) {
  return (
    <ul style={styles.ul}>
      {todos.map((todo, index) => {
        return (
          <TodoItem
            todo={todo}
            key={index}
            seq={index}
            onChange={onChange}
          />
        );
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
