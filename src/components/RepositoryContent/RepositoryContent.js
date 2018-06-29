import React from 'react';
import './style.css';

const RepositoryContent = (props) => 
  <article>
    <header className="title-repo">
      concrete-challenge
    </header>
    <p className="description-repo">
      Sed sed lacus ex. Maecenas eget sodales nisi, sit amet aliquet tortor. Mauris auctor feugiat imperdiet.
    </p>
    <div className="rate-repo">
      <i className="material-icons">star_border</i>
      <p className="quantity">7</p>
    </div>
  </article>

export default RepositoryContent;