import React, { useState, useEffect } from "react";
import { ModalContainer, ModalContent } from "./ModalStyle";

export const Modal = ({ message, show, color }) => {
  const [showMessage, setShowMessage] = useState(show);

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(false);
    }, 4000);
  }, [showMessage]);
  return (
    <ModalContainer>
      {showMessage && (
        <ModalContent backgroundColor={color}>
          <h3>{message}</h3>
        </ModalContent>
      )}
    </ModalContainer>
  );
};
