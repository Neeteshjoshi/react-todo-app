// import React, { useState } from "react";
// import TodoItem from "./TodoItem";

// const Todo = () => {
//   //Array of objects to store TODO items
//   const [todos, setTodos] = useState([]);

//   const handleDelete = () => {
//     setTodos((prevTodos) => {
//       const newTodos = [...prevTodos];
//       newTodos.pop();
//       return newTodos;
//     });
//   };

//   const handleSubmit = (inputValue) => {
//     setTodos((prevTodos) => {
//       const newTodos = [...prevTodos];
//       newTodos.push({
//         todo: inputValue,
//       });
//       return newTodos;
//     });
//   };
//   return (
//     <div>
//       <TodoItem
//         heading="Todo App"
//         todos={todos}
//         handleDeleteBtn={handleDelete}
//         handleSubmit={(inputValue) => handleSubmit(inputValue)}
//       />
//     </div>
//   );
// };

// export default Todo;
