import React from "react";

import { FaTrashAlt } from "react-icons/fa";
// // import { FiEdit } from "react-icons/fa";
// import { BiEdit } from 'react-icons/fa';

const Todo = props => {
  // console.log(todo);
  const { title, description } = props.todo;
  const { id } = props;
  // handle delete:
  const handleDelete = id => {
    alert(id);
  };
  return (
    <div className="d-flex">
      <table className="table mt-3">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <th scope="row">
              {id}
            </th> */}
            <td>
              {title}
            </td>
            <td>
              {description}
            </td>
            <td>
              <FaTrashAlt onClick={() => handleDelete(id)} />
            </td>
            {/* <td>
            <FiEdit></FiEdit>
            </td> */}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
