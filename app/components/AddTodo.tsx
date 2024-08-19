"use client";
import React from "react";
import { createTodo } from "../actions/todoActions";

export const AddTodo = () => {
  return (
    <div>
      <form
        action={async (formdata) => await createTodo(formdata)}
        className="flex gap-3"
      >
        <input type="text" name="post" />
        <button
          type="submit"
          className="bg-blue-400 cursor-pointer text-sm text-black p-2"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};
