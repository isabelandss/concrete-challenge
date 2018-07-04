import React from 'react';
import './Input.css';
import Search from '../../assets/images/search.svg';

const Input = ({ onChange, onSubmit }) =>
  <form className="input-form" onSubmit={onSubmit}>
    <input className="input-text" type="text" name="search" onChange={onChange} />
    <button className="input-button" type="submit"><img alt="imagem do botão de busca" src={Search}/></button>
  </form>

export default Input;
