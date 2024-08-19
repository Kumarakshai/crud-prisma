"use client";
import React from "react";
import { deleteTodo } from "../actions/todoActions";

const DeleteTodo = ({ todo }) => {
  return (
    <div>
      <form
        action={async (formdata) => await deleteTodo(formdata)}
        className="flex gap-3"
      >
        <input type="hidden" name="postId" value={todo.id} />
        <button
          type="submit"
          className="bg-blue-400 cursor-pointer text-sm text-black p-2"
        >
          Delete
        </button>
      </form>
    </div>
  );
};

export default DeleteTodo;
