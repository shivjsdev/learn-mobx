import { observable, action, computed, when, reaction } from "mobx";
import TodoItem from "./TodoItem.model";
import uiState from "../state/ui.state";

export default class TodoList {
  @observable list = [];
  @observable name = "Sample List";
  @observable showNewItem;
  @observable newItem = false;

  constructor(name, list) {
    this.name = name;
    // create all the list of objects
    const items = list.map(item => new TodoItem(item));
    // replace all at once - this is a better way
    this.list.replace(items);

    // initialize the empty for new items
    this.newItem = new TodoItem({});

    this.startConditions();
  }

  startConditions = () => {
    /* This happens only once when unfinished count is 0 */
    when(
      // once...
      () => this.unfinishedTodoCount === 0,
      // ... then
      () => this.clearAll()
    );

    /* 
      This checks for every time 
    */
    // reaction(
    //   () => this.unfinishedTodoCount,
    //   unfinishedTodoCount => {
    //     if (unfinishedTodoCount === 0) {
    //       this.clearAll();
    //     }
    //   }
    // );
  };

  @action toggleNewItem = () => {
    this.showNewItem = !this.showNewItem;
  };

  @action clearAll = () => {
    this.list.replace([]);
  };

  @action addNewItem = () => {
    this.list.push(this.newItem);
    this.newItem = new TodoItem({});
  };

  @action remove = item => {
    this.list.remove(item);
  };

  @computed get filteredList() {
    return uiState.searchText
      ? this.list.filter(todo => {
          return (
            todo.title.toLowerCase().indexOf(uiState.searchText.toLowerCase()) >
            0
          );
        })
      : this.list;
  }

  @computed get unfinishedTodoCount() {
    return this.list.filter(todo => !todo.finished).length;
  }

  @computed get finishedTodoCount() {
    return this.list.filter(todo => todo.finished).length;
  }
}
