import React from "react";
import DeleteTodo from "./DeleteTodo";

const Todo = ({ todo }) => {
  return (
    <div className="flex justify-between uppercase gap-5 p-3">
      {todo.title}
      <DeleteTodo todo={todo} />
    </div>
  );
};

export default Todo;
