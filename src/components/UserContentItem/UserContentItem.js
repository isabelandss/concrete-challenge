import React from 'react';
import './UserContentItem.css';

const UserContentItem = ({ name, value }) =>
  <div className="content-item">
    <img src={`/img/${name}.svg`} alt={`Imagem de ${name}`} />
    <p className={`user-${name}`}>{value}</p>
  </div>

export default UserContentItem;