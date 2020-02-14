// var state = {
//   firstName: "Siva",
//   lastName: "Pala",

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },

//   setName(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//   }
// };

// class State {
//   firstName = "Siva";
//   lastName = "Pala";

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   setName = (first, last) => {
//     this.firstName = first;
//     this.lastName = last;
//   };
// }

// import { observable } from "mobx";

// class State {
//   @observable firstName = "Siva";
//   @observable lastName = "Pala";

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   setName = (first, last) => {
//     this.firstName = first;
//     this.lastName = last;
//   };
// }

import { observable, computed, action } from "mobx";

class State {
  @observable firstName = "Siva";
  @observable lastName = "Pala";

  @computed get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  @action setName = (first, last) => {
    this.firstName = first;
    this.lastName = last;
  };
}

import { autorun, when, reaction } from "mobx";
autorun(() => {
  document.body.innerHTML = `<h1>${appState.fullName}</h1>`;
});

import ReactDOM from "react-dom";
import { observer } from "mobx-react";

const appState = new State();

const UserName = observer(() => `<h1>${appState.fullName}</h1>`);

const App = () => (<div><UserName /></div>);

ReactDOM.render(<App />, document.getElementById("root"));

class State {
  @observable firstName = "Siva";
  @observable lastName = "Pala";

  @computed get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export default State;


observer(React.createClass({ ... }))

@observer class MyComponent extends React.Component { ... }