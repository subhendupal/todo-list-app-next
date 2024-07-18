import { prisma } from "@/db";
import { redirect } from "next/navigation";

export async function getTodos() {
  return prisma.todo.findMany();
}

export async function createTodo(data: FormData) {
  "use server";

  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length == 0) {
    return new Error("Invalid Title");
  }

  await prisma.todo.create({
    data: {
      title: title,
      complete: false,
    },
  });
  redirect("/");
}

export async function toggleTodo(id: string, complete: boolean) {
  "use server";

  await prisma.todo.update({ where: { id }, data: { complete } });
}

export async function removeTodo(id: string) {
  "use server";

  await prisma.todo.delete({ where: { id } });
}
