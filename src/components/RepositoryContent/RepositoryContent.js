import React from 'react';
import Star from '../../assets/images/star.svg';
import './RepositoryContent.css';

const RepositoryContent = ({ name, description, stars, html_url }) =>
  <article className="repository-content-wrapper">
    <header className="repository-title">
      <a href={html_url} target="_blank" className="repository-redirect">
        {name}
      </a>
    </header>
    <p className="repository-description">
      {description}
    </p>
    <div className="repository-rate">
      <img src={Star} alt="" />
      <p className="repository-quantity">{stars}</p>
    </div>
  </article>

export default RepositoryContent;