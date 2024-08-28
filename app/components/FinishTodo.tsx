"use client";
import React from "react";
import { finishTodo } from "../actions/todoActions";

const FinishTodo = ({ todo }: any) => {
  return (
    <div>
      <form
        action={async (formdata) => await finishTodo(formdata)}
        className="flex gap-3"
      >
        <input type="hidden" name="postId" value={todo.id} />
        <button
          type="submit"
          className="bg-warning cursor-pointer text-sm text-black p-2"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default FinishTodo;
