import React from 'react';
import './style.css';
import Search from '../../assets/images/search.svg';

const Input = ({ onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="search" onChange={onChange} />
      <button type="submit"><img alt="" src={Search}/></button>
    </form>
  );
}

export default Input;