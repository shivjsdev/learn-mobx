import { observable, action, computed, when, reaction } from "mobx";

class UIState {
  @observable searchText = "";

  @action setValue = (key, value) => {
    this[key] = value;
  };
}

// This is a single ton class,
// you always get the same object for the whole app
export default new UIState();
