import React from 'react';
import './style.css';

const UserContent = ({ name, login, avatar_url, bio, followers, following }) => 
  <aside>
    <img className="avatar" src={avatar_url} alt="" />
    <p className="user-name">{name}</p>
    <p className="user-login">{login}</p>
    <p>{followers} seguidores</p>
    <p>{following} seguindo</p>
    <p className="bio">{bio}</p>
  </aside>

export default UserContent;