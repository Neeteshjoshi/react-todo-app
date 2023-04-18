import React, { useState } from "react";

const TodoItem = ({ heading, todos, handleDeleteBtn }) => {
  const [selectedTodo, setSelectedTodo] = useState();
  return (
    <>
      <h1 className="text-center my-3">{heading}</h1>
      <ul className="list-group d-flex align-items-center">
        {todos.map((item, index) => {
          return (
            <li
              className="list-group-item fs-4 w-50 my-2 bg-dark text-light user-select-none d-flex justify-content-between"
              style={{ fontfamily: "Poppins" }}
              key={item.todo}
            >
              {item.todo}
              <i className="bi bi-trash" onClick={handleDeleteBtn}></i>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TodoItem;
