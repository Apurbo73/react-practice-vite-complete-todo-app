import React from "react";
import Todo from "./Todo";

const Todos = ({ todos }) => {
  // console.log(todos)
  return (
    <div>
      {todos.map(todo => <Todo key={todo.id} todo={todo.todo} id={todo.id}/>)}
    </div>
  );
};

export default Todos;
