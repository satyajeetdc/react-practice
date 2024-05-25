import React from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";

const App = () => {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "25/05/24",
    },
    {
      name: "Buy Oats",
      dueDate: "25/05/24",
    },
  ];
  return (
    <center className="todoContainer">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
};

export default App;
