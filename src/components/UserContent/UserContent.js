import React from 'react';
import UserContentItem from '../UserContentItem';
import './style.css';

const UserContent = ({ user, avatar_url, name, login }) => {
  return (
    <aside>
      <img className="avatar" src={avatar_url} alt="Avatar do usuário" />
      <p className="user-name">{name}</p>
      <p className="user-login">{login}</p>
      {
          Object
            .entries(user)
            .map(([name, value], i) => {
              return (
                <UserContentItem key={i} name={name} value={value} />
              );
            })
        }
    </aside>
  );
}

export default UserContent;
