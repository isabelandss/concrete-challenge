import React from 'react';
import './Header.css';
import Input from '../Input';
import { Link } from 'react-router-dom';

const Header = ({ onChange, onSubmit }) =>
  <header>
    <nav className="header-nav">
      <Link className="header-logo" to="/">
        <p className="header-firstname">GitHub<span className="header-lastname">Search</span></p>
      </Link>
      <div className="header-search">
        <Input onChange={onChange} onSubmit={onSubmit}/>
      </div>
    </nav>
  </header>

export default Header;