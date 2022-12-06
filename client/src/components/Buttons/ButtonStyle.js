import styled from "styled-components";

export const ButtonContainer = styled.button`
  // overflow: hidden;
  // position: relative;
  // cursor: pointer;
  // box-shadow: 0 0 5px rgba(183, 202, 219, 0.4);
  //------------------------------------
  width: 100%;
  height: 30px;
  text-align: center;
  color: ${(props) => (props.textColor ? props.textColor : "white")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#a52bd2"};
  margin-right: 1rem;
  border-radius: 50px;
  border: ${(props) => (props.border ? props.border : "none")};
  font-weight: 550;

  /*for ripples */
  background-position: center;
  transition: background 0.9s;

  &:hover {
    cursor: pointer;
    background: #a52bd2 radial-gradient(circle, transparent 1%, #a52bd2 1%)
      center/15000%;
    color: white;
  }

  &:active {
    background-color: whitesmoke;
    background-size: 100%;
    transition: background 0s;
  }
`;
