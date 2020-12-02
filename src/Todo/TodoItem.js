import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    border: '1px solid white',
    borderRadius: 10,
    margin: 10,
    // input: {
    //   width: 32,
    // },
    // button: {
    //   width: 32,
    // },
  },
  block: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    margin: 5,
    width: 20,
    fontSize: 32,
  },
};

function TodoItem({ todo, seq }) {
  return (
    <li style={styles.li}>
      <block style={styles.block}>
        <input type="checkbox" style={styles.input} />
        {seq + 1}.&nbsp;
        {todo.firstName}. {todo.lastName}
        &nbsp;is a {todo.role} at age {todo.age}.
      </block>
      <button>&times;</button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }).isRequired,
  seq: PropTypes.number.isRequired,
};

export default TodoItem;
