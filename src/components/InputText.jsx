import React from "react";

export const InputText = ({ className, ...props }) => (
  <input
    type="text"
    className={`text-sm rounded h-10 w-64 p-1 ${className}`}
    {...props}
  />
);
