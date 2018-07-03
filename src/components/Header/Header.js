import React from 'react';
import './Header.css';
import Input from '../Input';

const Header = ({ onChange, onSubmit }) =>
  <header>
    <nav className="header-nav">
      <div className="header-logo" onClick={() => window.location = "/"}>
        <p className="header-firstname">GitHub<span className="header-lastname">Search</span></p>
      </div>
      <div className="header-search">
        <Input onChange={onChange} onSubmit={onSubmit}/>
      </div>
    </nav>
  </header>

export default Header;