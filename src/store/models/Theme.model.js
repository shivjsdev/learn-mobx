import { observable, action } from "mobx";

export default class Theme {
  @observable mode = "light";

  @action setTheme(newTheme) {
    this.mode = newTheme;
  }
}
