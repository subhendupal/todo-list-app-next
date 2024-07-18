import Link from "next/link";
import { Fragment } from "react";
import { createTodo } from "@/transactions/todos";

export default function New() {
  return (
    <Fragment>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">New</h1>
      </header>
      <form action={createTodo} className="flex gap-2 flex-col">
        <input
          type="text"
          name="title"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <div className="flex gap-1 justify-end">
          <Link
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 outline-none"
            href=".."
          >
            Cancel
          </Link>
          <button
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 outline-none"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </Fragment>
  );
}
