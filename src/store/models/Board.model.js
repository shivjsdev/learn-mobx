import { observable } from "mobx";
import { generateTasks } from "../data/tasks";
import TodoList from "./TodoList.model";

export default class Board {
  @observable searchText;
  @observable todoList;
  @observable progressList;
  @observable doneList;

  constructor() {
    const { todoItems, progressItems, doneItems } = generateTasks();
    this.todoList = new TodoList("Cities to visit", todoItems);
    this.progressList = new TodoList("In Planning", progressItems);
    this.doneList = new TodoList("Visited", doneItems);
  }
}
