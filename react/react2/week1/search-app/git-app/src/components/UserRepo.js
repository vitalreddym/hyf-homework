import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './main.css';

function UserRepo() {
  const { id } = useParams();
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/users/${id}/repos`).then((response) =>
      response.json().then((data) => {
        setRepos(data);
      })
    );
  }, [id]);

  return (
    <div>
      <div>Github User: {id}</div>
      <div>Total Repos: {repos.length}</div>
      <div className="box-center">
        <div>Repo List:</div>
        <div className="flex-container">
          {repos.map((repo) => (
            <div key={repo.id}>{repo.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserRepo;
