import React, { FC } from "react";

interface InputFieldProps {
  placeholder: string;
}

export const InputField: FC<InputFieldProps> = ({ placeholder }) => (
  <input
    className="w-full p-4 mb-4 border rounded-md"
    placeholder={placeholder}
  />
);
