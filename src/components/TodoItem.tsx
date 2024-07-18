"use client";

import { useState } from "react";

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
  removeTodo: (id:string) => void
};

export function TodoItem({ id, title, complete, toggleTodo, removeTodo }: TodoItemProps) {
  const [isDeleted, setDeleted] = useState(false)

  async function handleRemove(id: string) {
    await removeTodo(id)
    setDeleted(true)
  }

  return (
    !isDeleted && <li className="flex gap-1 items-center py-1">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
      <button className="ml-auto border bg-red-500 border-slate-300 text-slate-100 px-1 rounded hover:bg-slate-700 outline-none" onClick={() => handleRemove(id)}>
        Remove
      </button>
    </li>
  );
}
