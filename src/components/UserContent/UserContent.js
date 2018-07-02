import React from 'react';
import UserContentItem from '../UserContentItem';
import './UserContent.css';

const UserContent = ({ user, avatar_url, name, login }) => {
  return (
    <aside className="user-content-wrapper">
      <img className="user-avatar" src={avatar_url} alt="Avatar do usuário" />
      <p className="user-name">{name}</p>
      <p className="user-login">{login}</p>
      {
          Object
            .entries(user)
            .map(([name, value], i) => {
              if(value) {
                return (
                  <UserContentItem key={i} name={name} value={value} />
                );
              }
            })
        }
    </aside>
  );
}

export default UserContent;
