import '../reset.css';
import './styledComponents/UserInfo.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UserInfo() {
  const [user, setUser] = useState([]);
  const { login } = useParams();
  useEffect(() => {
    axios.get(`https://api.github.com/users/${login}`).then(({ data }) => {
      setUser(data);
    });
  }, [login]);
  return (
    <div className="UserInfo">
      <img className="userAvatar" srcSet={user.avatar_url} alt="Avatar" />

      <div className="userDetail">
        <h1 className="userName">{user.login} </h1>
        <p>{user.company} </p>
        <p>followers: {user.followers} </p>
        <p>following: {user.following} </p>
        <p>{user.email} </p>
        <p>{user.hireable} </p>
        <p>Created at: {user.created_at} </p>
      </div>
    </div>
  );
}

export default UserInfo;
