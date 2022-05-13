import React, { useState, useEffect } from 'react';
import './App.css';
import Todolist from './components/Todolist';
import Timer from './components/Timer';
import AddToDo from './components/AddToDo';

function App() {
  const [todolist, setTodolist] = useState([]);
  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"
    )
      .then((response) => response.json())
      .then((result) => {
        setTodolist(
          result.map((todolist) => {
            return { ...todolist, isChecked: false };
          })
        );
      });
  }, []);

  const onAddToDO = (result) => {
    setTodolist((pre) => {
      return pre.concat(result);
    });
  };

  const onDeleteToDo = (result) => {
    setTodolist(result);
  };

  return (
    <div>
      <h2>Todolist</h2>
      <Timer></Timer>
      <AddToDo onNewToDo={onAddToDO}></AddToDo>
      <Todolist todolist={todolist} onDeleteToDo={onDeleteToDo}></Todolist>
    </div>
  );
}

export default App;
