import React from "react";
import { observer } from "mobx-react";
import { Board } from "./Board";

const Content = observer(() => {
  return (
    <div className="content bg-blue-500">
      <Board />
    </div>
  );
});

export default Content;
