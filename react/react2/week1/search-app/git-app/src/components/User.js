import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { userContext } from '../ContextGithub';

function User( { user }) {
  const [ users, setUsers] = useState([]);
  const userName = React.useContext(userContext);

  useEffect(() => {
    if(userName !== "") {
      fetch(`https://api.gitub.com/search/users?q=${userName}`)
      .then(response => response.json())
      .then(data => setUsers(data));
    }
  }, [ userName] );

  const getUsernames = userName === "" ? "No results...":
  (users.map((user) => (
    <li key={user.id}>{user.login}</li>
  )))

  return (
    <div>
      <div className="">
        {getUsernames}
       { /*<a href={`https://github.com/${user.login}`}>{user.login}</a> */ }
        <Link to={`/user/${user.login}`}>{user.login}</Link>
        <img src={user.avatar_url} alt="user-avatar" className="circle"></img> 
  </div>
    </div>
  );
}
export default User;
