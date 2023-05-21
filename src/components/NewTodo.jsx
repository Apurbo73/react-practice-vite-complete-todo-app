import React, { useState } from "react";

const NewTodo = props => {
  const [newTodo, setNewTodo] = useState({
    title: "",
    description: ""
  });
  // destructuring:
  const { title, description } = newTodo;
  // handle Submit:
  const handleSubmit = e => {
    e.preventDefault();
    // console.log(newTodo);
    props.onAddTodo(newTodo);
    setNewTodo({ title: "", description: "" });
  };
  // handle change on input:
  const handleChange = e => {
    const name = e.target.name;
    setNewTodo(currentTodos => {
      return { ...currentTodos, [name]: e.target.value };
    });
  };
  return (
    <div>
      <h6> Add New Todo</h6>
      <form onSubmit={handleSubmit}>
        <div
          style={{ justifyContent: "space-between" }}
          className="d-flex mt-3"
        >
          <div>
            <input
              type="text"
              name="title"
              value={title}
              id=""
              className="text-center"
              placeholder="Enter New Todo Title"
              onChange={handleChange}
            />
          </div>
          <div>
            <textarea
              type="text"
              name="description"
              className="text-center"
              value={description}
              id=""
              placeholder="Enter  Description"
              onChange={handleChange}
            />
          </div>
          <div>
            <button className="btn btn-success">Add Todo</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewTodo;
