import { AddTodo } from "./components/AddTodo";
import { PrismaClient } from "@prisma/client";
import Todo from "./components/Todo";

const prisma = new PrismaClient();

const getData = async () => {
  const data = await prisma.todo.findMany({
    select: {
      id: true,
      title: true,
      isCompleted: true,
    },
    orderBy: {
      id: "desc",
    },
  });

  // console.log(data);
  return data;
};

export default async function Home() {
  const data = await getData();

  return (
    <div className="flex justify-center flex-col items-center gap-5">
      <p>Todo List</p>
      <div>
        <AddTodo />
      </div>
      <div>
        {data.map((todo, key) => (
          <div key={key}>
            {/* <li key={key}>{todo.title}</li> */}
            <Todo todo={todo} />
          </div>
        ))}
      </div>
    </div>
  );
}
