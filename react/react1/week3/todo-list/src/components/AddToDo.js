import React, { useState } from 'react';
import '../Style.css';
import PropTypes from 'prop-types';

function NewToDo({ onNewToDo }) {
  const [todo, setTodo] = useState('');
  const [deadline, setDeadline] = useState('');
  const [message, setMessage] = useState('');

  const handleToDoChange = (e) => {
    setTodo(e.target.value);
    let newMessage = e.currentTarget.value
    // console.log(newMessage)
    setMessage(newMessage)
    
  };

  const handleDeadlineChange = (e) => {
    setDeadline(e.target.value);
    if (!todo) {
        alert("Please enter a date");
        return false;
      } else {
        console.log("todo added");
      }
  };

  const handleButtonAddToDo = (e) => {
    onNewToDo({ todo, deadline });
    e.preventDefault()
    console.log('Todo submitted')
    setMessage("")

    if (!todo) {
        alert("Please enter a task");
        return false;
      } else {
        console.log("todo added");
      }
  };
  
  return (
    <div>
        <div>
        <label>To Description</label>
        <input type="text" value={message} onChange={handleToDoChange} ></input> 
      </div>
      <div>
        <label>Deadline</label>
        <input
          type="date"
          value={deadline}
          onChange={handleDeadlineChange}
        ></input>
      </div>
      <button onClick={handleButtonAddToDo}>Add ToDo</button>
      
    </div>
  );
}
NewToDo.propTypes = {
    onNewToDo: PropTypes.string
}

export default NewToDo;