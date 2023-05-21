import React, { useState } from "react";
import Todos from "./Todos";
import NewTodo from "./NewTodo";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const handleAddTodo = todo => {
    console.log(todo);
    setTodos(previousTodos => {
      return [...previousTodos, { id: uuidv4(), todo }];
    });
  };
  // handle Remove Todo:
  const handleRemoveTodo = id => {
    setTodos(previousTodos => {
      const filteredTodos = previousTodos.filter(todo => todo.id !== id);
      return filteredTodos;
    });
  };
  return (
    <div>
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
      <NewTodo onAddTodo={handleAddTodo} />
    </div>
  );
};

export default Home;
