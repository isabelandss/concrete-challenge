import React from 'react';
import './style.css';

const UserContentItem = ({ name, value }) => 
  <p className={`user-${name}`}><span></span>{value}</p>

export default UserContentItem;