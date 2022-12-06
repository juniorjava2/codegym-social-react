import styled from "styled-components";

/* The Modal (background) */
export const ModalContainer = styled.div`
  //display: none; /* Hidden by default */
  display: flex;
  align-items: center;
  justify-content: center;
  //margin-left: 5rem;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */

  top: 0;
  width: 100%;
  height: 45px;
  color: white;
`;

/* Modal Content/Box */

export const ModalContent = styled.div`
  /* background-color: #fefefe; */

  display: flex;
  align-items: center;
  justify-content: center;

  //background-color: rgba(0, 230, 0, 0.8);
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "rgba(0, 230, 0, 0.8)"};
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
  margin: 15% auto; /* 15% from the top and centered */
  height: inherit;
  color: black;
  border: none;
  border-radius: 10px;
  width: 80%; /* Could be more or less, depending on screen size */

  h3 {
    color: #595959;
  }
`;

/* The Close Button */
export const closeButton = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;
