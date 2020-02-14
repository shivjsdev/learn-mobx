import React from "react";
import { observer } from "mobx-react";

export const EditableText = observer(
  ({ value, isEditable, updateHandler, editHandler }) => {
    return (
      <div>
        {isEditable ? (
          <textarea
            className="w-full"
            type="text"
            value={value}
            onChange={e => updateHandler(e.target.value)}
            autoFocus
            onBlur={editHandler}
          />
        ) : (
          <p className="text-gray-800" onClick={editHandler}>
            {value}
          </p>
        )}
      </div>
    );
  }
);
