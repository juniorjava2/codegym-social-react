import React from "react";
import { ButtonContainer } from "./ButtonStyle";

export const Button = ({
  label,
  backgroundColor,
  border,
  textColor,
  onClick,
}) => {
  return (
    <ButtonContainer
      id="ripple"
      backgroundColor={backgroundColor}
      border={border}
      textColor={textColor}
      onClick={onClick}
    >
      {label}
    </ButtonContainer>
  );
};
