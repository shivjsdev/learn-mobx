import React from "react";
import { observer } from "mobx-react";
import { Button, ButtonNewItem } from "./Buttons";

export const TodoNewItem = observer(
  ({ addHandler, clearAllHandler, todo, showNewItem, toggleNewItem }) => (
    <section className="col-span-8 m-2 grid mb-5">
      {showNewItem ? (
        <>
          <textarea
            className="w-full h-20 col-span-3 "
            type="text"
            value={todo.title}
            onChange={e => todo.setText(e.target.value)}
          />
          <Button className="col-span-1 bg-green-500" onClick={addHandler}>
            Add
          </Button>
          <Button className="col-span-1 bg-red-600" onClick={clearAllHandler}>
            Clear All
          </Button>
          <Button className="col-span-1 bg-blue-600" onClick={toggleNewItem}>
            Close
          </Button>
        </>
      ) : (
        <div className="col-span-3">
          <ButtonNewItem onClick={toggleNewItem}>+ Add New Item</ButtonNewItem>
        </div>
      )}
    </section>
  )
);
