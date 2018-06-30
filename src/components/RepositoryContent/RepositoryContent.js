import React from 'react';
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
      <i className="material-icons">star_border</i>
      <p className="quantity">{stars}</p>
    </div>
  </article>

export default RepositoryContent;