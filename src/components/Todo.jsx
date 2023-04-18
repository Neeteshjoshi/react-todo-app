import React from "react";
import TodoItem from "./TodoItem";

const Todo = () => {
  //Array of objects to store TODO items
  const Todos = [
    {
      todo: "Clean",
    },
    {
      todo: "Read",
    },
  ];

  const handleDelete = () => {
    console.log("clicked");
  };
  return (
    <div>
      <TodoItem
        heading="Todo App"
        todos={Todos}
        handleDeleteBtn={handleDelete}
      />
    </div>
  );
};

export default Todo;
