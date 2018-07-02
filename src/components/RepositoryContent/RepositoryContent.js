import React from 'react';
import Star from '../../assets/images/star.svg';
import './RepositoryContent.css';

const RepositoryContent = ({ name, description, stars }) => 
  <article className="repository-content-wrapper">
    <header className="repository-title">
      {name}
    </header>
    <p className="repository-description">
      {description}
    </p>
    <div className="repository-rate">
      <img src={Star} alt=""/>
      <p className="repository-quantity">{stars}</p>
    </div>
  </article>

export default RepositoryContent;