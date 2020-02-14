import React from "react";
import "./index.css";
// import "./App.css";
import { StoreContext, store } from "@store";
import Header from "../components/Header";
import Content from "../components/Content";

function App() {
  return (
    <StoreContext.Provider value={store}>
      <div className="">
        <Header />
        <Content />
      </div>
    </StoreContext.Provider>
  );
}

export default App;
