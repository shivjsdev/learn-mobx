import React from "react";
import { observer } from "mobx-react";
import { useStore } from "@store";
import { TodoList } from "./TodoList";

export const Board = observer(() => {
  const { board } = useStore();

  return (
    <section className="p-6 flex flex-row flex-wrap items-start">
      <TodoList list={board.todoList} />
      <TodoList list={board.progressList} />
      <TodoList list={board.doneList} />
    </section>
  );
});
