import React, { useState } from "react";
import { Input } from "./TextInputStyle";

export const TextInput = ({
  type,
  onChange,
  placeholder,
  borderRadius,
  border,
  textAlign,
}) => {
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
    if (onChange) onChange(inputValue);
  }
  return (
    <>
      <Input
        type={type}
        border={border}
        borderRadius={borderRadius}
        placeholder={placeholder}
        textAlign={textAlign}
        value={inputValue}
        onChange={handleChange}
      />
    </>
  );
};
