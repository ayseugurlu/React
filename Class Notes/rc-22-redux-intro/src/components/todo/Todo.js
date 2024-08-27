import React from "react";
import "./Todo.css"
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./Todo.css";

const Todo = () => {
  return (
    <div className="app">
      <h2>Todo With Redux</h2>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default Todo;
