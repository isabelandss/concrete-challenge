import React from 'react';
import './style.css';
import Input from '../Input';

const Header = ({ onChange, onSubmit }) =>
  <header>
    <nav>
      <div className="info-page">
        <p className="name-page">GitHub<span className="lastname-page">Search</span></p>
      </div>
      <div className="search-box">
        <Input onChange={onChange} onSubmit={onSubmit}/>
      </div>
    </nav>
  </header>

export default Header;