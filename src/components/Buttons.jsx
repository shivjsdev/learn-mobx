import React from "react";

export const CheckButton = ({ onClickHandler, isFinished }) => (
  <div className="col-span-1">
    <button
      onClick={onClickHandler}
      className={`focus:outline-none rounded border border-gray-400 w-4 h-4 m-1 ${
        isFinished ? "bg-green-300" : ""
      }`}
    ></button>
  </div>
);

export const DeleteButton = ({ onClickHandler }) => (
  <div className="col-span-1 text-right">
    <button onClick={onClickHandler} className="text-sm text-gray-500 w-4 h-4">
      x
    </button>
  </div>
);

export const ButtonNewItem = props => (
  <button className="w-full p-1 mt-2 text-gray-600" {...props} />
);

export const Button = ({ className, ...props }) => (
  <button
    className={`text-sm rounded border text-white p-1 mt-2 w-20 ${className}`}
    {...props}
  ></button>
);
