import React, { useState } from "react";

const TodoItem = ({ heading, todos, handleDeleteBtn, handleSubmit }) => {
  const [selectedTodo, setSelectedTodo] = useState();
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <>
      <h1 className="text-center my-3">{heading}</h1>
      <div className="d-flex flex-column w-100 fs-4 h-50 justify-content-center align-items-center">
        <div className="d-flex w-100 justify-content-center align-items-center">
          <input
            type="text "
            value={inputValue}
            onChange={handleInputChange}
            className="form-control  h-50 w-50 mx-2 fs-3"
            placeholder="Enter Task"
            key={todos.todo}
          />

          <i
            className="bi bi-plus-lg "
            type="submit"
            onClick={() => {
              handleSubmit(inputValue);
              setInputValue("");
            }}
          ></i>
        </div>
        <div className="card my-2 bg-dark " style={{ width: "700px" }}>
          <div className="card-title">
            <h2 className="text-center text-light">Todo List</h2>
            <div className="card-body">
              <ul className="list-group d-flex align-items-center">
                {todos.map((item, index) => {
                  return (
                    <li
                      className="list-group-item fs-4 w-75 my-2 bg-light text-dark user-select-none d-flex justify-content-between"
                      style={{ fontfamily: "Poppins" }}
                      key={item.todo}
                      onClick={() => {
                        setSelectedTodo(index);
                      }}
                    >
                      {item.todo}
                      <i
                        className="bi bi-trash"
                        onClick={() => {
                          setSelectedTodo(index);
                          handleDeleteBtn();
                        }}
                      ></i>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
