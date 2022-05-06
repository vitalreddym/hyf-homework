import React, { Component } from "react";
import { List } from "../List/List";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { Timer } from "../Timer/Timer";


export default class App extends Component {
  state = {
    todos: [
      { id: 1, description: "Get out of bed", done: false },
      { id: 2, description: "Brush your teech", done: false },
      { id: 3, description: "Eat breakfast", done: false },
    ],
    todoText: ""

  };

  onChangeInput = e => {
    this.setState({ todoText: e.target.value });
  };

  onSubmitTodo = () => {
    this.setState(({ todos, todoText }) => ({
      todos: [...todos, { id: todos.length + 1, description: todoText, done: false }],
      todoText: "random text "
    }));
  };

  onChangeBox = item => {
    this.setState(({ todos }) => ({
      todos: todos.map(el =>
        el.id === item.id ? { ...el, done: !el.done } : el
      )
    }));
  };

  handleDel = item => {
    this.setState(({ todos }) => ({
      todos: todos.filter(el => el.id !== item.id)
    }));
  };

  render() {
    const { todos, todoText } = this.state;

    return (
      <>
        <h2>ToDo List:</h2>
        <Timer /> <br />
        <Input value={todoText} onChange={this.onChangeInput} />
        <Button onClick={this.onSubmitTodo}>Add todo</Button>
        <p>{this.state.todos.length}</p>
        <List
          list={todos}
          onChangeBox={this.onChangeBox}
          handleDel={this.handleDel}

        />
      </>

    );
  }
}
