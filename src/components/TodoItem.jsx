import React from "react";
import { observer } from "mobx-react";
import { EditableText } from "./EditableText.jsx";
import { CheckButton, DeleteButton } from "./Buttons.jsx";

export const TodoItem = observer(({ todo, removeHandler }) => (
  <div className={`m-2 rounded px-2 py-1 bg-white grid grid-cols-8`}>
    {!todo.isEditable && (
      <CheckButton
        onClickHandler={todo.toggleFinish}
        isFinished={todo.finished}
      />
    )}
    <div className={`${todo.isEditable ? "col-span-8" : "col-span-6"}`}>
      <EditableText
        value={todo.title}
        isEditable={todo.isEditable}
        updateHandler={value => todo.setText(value)}
        editHandler={todo.toggleEdit}
      />
    </div>
    {!todo.isEditable && <DeleteButton onClickHandler={removeHandler} />}
  </div>
));
