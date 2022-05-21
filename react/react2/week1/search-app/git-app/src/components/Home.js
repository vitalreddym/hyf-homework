import React, { useState, useRef, useEffect } from 'react';
import SearchUser from './SearchUser';

import './main.css';

function Main() {
  const [username, setUsername] = useState('');
  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };
  const inputRef = useRef('');
  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  return (
    <div>
      <h1>Github User Serach</h1>
      <input
        type="text"
        ref={inputRef}
        onChange={handleInputChange}
        placeholder="serach user"
      ></input>
      {username.length === 0 ? (
        <div>No results</div>
      ) : (
        <SearchUser username={username}></SearchUser>
      )}
    </div>
  );
}

export default Main;
