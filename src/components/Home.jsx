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
  return (
    <div>
      <Todos todos={todos} />
      <NewTodo onAddTodo={handleAddTodo} />
    </div>
  );
};

export default Home;
