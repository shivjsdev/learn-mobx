import React from "react";
import { observer } from "mobx-react";
import { TodoItem } from "./TodoItem";
import { TodoNewItem } from "./TodoNewItem";

export const TodoList = observer(({ list: todoList }) => {
  return (
    <section className="bg-gray-200 m-2 w-64 rounded">
      <h3 className="text-large font-bold p-2 uppercase text-teal-800">
        {todoList.name}
        <span className="text-xs float-right">
          {todoList.finishedTodoCount}/{todoList.list.length}
        </span>
      </h3>
      <div className="todo-list">
        {todoList.filteredList.map(item => (
          <TodoItem
            todo={item}
            key={item.id}
            removeHandler={() => todoList.remove(item)}
          />
        ))}
        <hr className="my-5" />
        <TodoNewItem
          showNewItem={todoList.showNewItem}
          toggleNewItem={todoList.toggleNewItem}
          addHandler={todoList.addNewItem}
          clearAllHandler={todoList.clearAll}
          todo={todoList.newItem}
        />
      </div>
    </section>
  );
});
