import React, { useState } from "react";
import { CustomButton } from "./ButtonStyle";

export const Button = ({ buttons, index }) => {
  const [clickedId, setClickedId] = useState(1);

  const [fColor, setFColor] = useState("dodgerblue");
  const [bgColor, setBGColor] = useState("white");
  const [clicked, setClicked] = useState(true);

  const changeColor = () => {
    setFColor("white");
    setBGColor("purple");
  };

  const clickedState = () => {
    setClicked(index === clickedId ? !clicked : clicked);
  };
  return (
    <>
      {buttons.map((buttonLabel, index) => (
        <CustomButton
          color={fColor}
          backgroundColor={bgColor}
          key={index}
          name={buttonLabel}
          onClick={() => {
            setClickedId(index);
            clickedState;
          }}
        >
          {buttonLabel} {clickedId} {fColor} {bgColor} {clicked.toString()}
        </CustomButton>
      ))}
    </>
  );
};
