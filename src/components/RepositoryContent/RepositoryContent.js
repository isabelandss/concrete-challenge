import React from 'react';
import Star from '../../assets/images/star.svg';
import './style.css';

const RepositoryContent = ({ name, description, stars }) => 
  <article>
    <header className="title-repo">
      {name}
    </header>
    <p className="description-repo">
      {description}
    </p>
    <div className="rate-repo">
      <img src={Star} alt=""/>
      <p className="quantity">{stars}</p>
    </div>
  </article>

export default RepositoryContent;