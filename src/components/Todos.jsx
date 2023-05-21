import React from "react";
import Todo from "./Todo";

const Todos = props => {
  // console.log(todos)
  return (
    <div>
      {props.todos.map(todo =>
        <Todo
          key={todo.id}
          todo={todo.todo}
          id={todo.id}
          onRemoveTodo={props.onRemoveTodo}
        />
      )}
    </div>
  );
};

export default Todos;
