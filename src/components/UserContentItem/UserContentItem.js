import React from 'react';
import './style.css';

const UserContentItem = ({ name, value }) =>
  <div className="content-item">
    <img src={`/img/${name}.svg`} alt="" />
    <p className={`user-${name}`}>{value}</p>
  </div>

export default UserContentItem;