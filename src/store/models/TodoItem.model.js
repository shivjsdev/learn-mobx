import { observable, action } from "mobx";

export default class TodoItem {
  @observable id = Math.random();
  @observable title = "";
  @observable finished = false;
  @observable isEditable = false;

  constructor({ title = "", finished = false, isEditable = false }) {
    this.title = title;
    this.finished = finished;
    this.isEditable = isEditable;
  }

  @action toggleFinish = () => {
    this.finished = !this.finished;
  };

  @action toggleEdit = () => {
    this.isEditable = !this.isEditable;
  };

  @action setText(value) {
    this.title = value;
  }
}
