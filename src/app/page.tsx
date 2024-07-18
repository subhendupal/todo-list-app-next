import { TodoItem } from "@/components/TodoItem";
import { getTodos, removeTodo, toggleTodo } from "@/transactions/todos";
import Link from "next/link";
import { Fragment } from "react";

export default async function Home() {
  const todos = await getTodos();

  // await prisma.todo.create({data: {
  //   title: "test",
  //   complete: false
  // }})

  return (
    <Fragment>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Todos</h1>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 outline-none"
          href="/new"
        >
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} removeTodo={removeTodo}/>;
        })}
      </ul>
    </Fragment>
  );
}
