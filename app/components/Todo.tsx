import React from "react";
import DeleteTodo from "./DeleteTodo";
import FinishTodo from "./FinishTodo";

const Todo = ({ todo }) => {
  return (
    <div className="flex justify-between uppercase gap-5 p-2">
      {todo.title}
      <div className="flex justify-between gap-5">
        <DeleteTodo todo={todo} />
        <FinishTodo todo={todo} />
      </div>
    </div>
  );
};

export default Todo;
