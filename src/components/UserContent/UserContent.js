import React from 'react';
import UserContentItem from '../UserContentItem';
import './style.css';

const UserContent = ({ user, avatar_url }) => {
  return (
    <aside>
      <img className="avatar" src={avatar_url} alt="Avatar do usuário" />
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
