import React from 'react';
import './style.css';
import Input from '../Input';
import GitIcon from '../../assets/images/github.svg';

const Header = (props) => 
  <header>
    <nav>
      <div className="info-page">
        <img className="icon" src={GitIcon} alt=""/>
        <p className="name-page">GitHub</p>
        <p className="name-page">Search</p>
      </div>
      <div className="search-box">
        <Input/>
      </div>
    </nav>
  </header>

export default Header;