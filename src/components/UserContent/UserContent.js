import React from 'react';
import UserContentItem from '../UserContentItem';
import './style.css';

const UserContent = ({ user, avatar_url }) => {
  return(
    <aside>
      <img className="avatar" src={avatar_url} alt="" />
      {/* {
        Object
          .entries(user)
          .map(([ name, value ]) => {
            return (
              <UserContentItem name={name} value={value} />
            );
          })
        } */}
    </aside>
  );
}

export default UserContent;
