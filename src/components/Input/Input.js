import React from 'react';
import './style.css';

const Input = ({ onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="search" onChange={onChange} />
      <button type="submit"><i className="material-icons">search</i></button>
    </form>
  );
}

export default Input;