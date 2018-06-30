import React from 'react';
import './style.css';

const Input = ({ onChange, onClick }) => 
  <form action="">
    <input type="text" name="search" onChange={onChange}/>
    <button onClick={onClick}><i className="material-icons">search</i></button>
  </form>

export default Input;