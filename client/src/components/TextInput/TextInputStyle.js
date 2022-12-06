import styled from "styled-components";

export const Input = styled.input`
  display: flex;
  text-align: ${(props) => (props.textAlign ? props.textAlign : "flex-start")};
  margin: 0.3rem;
  padding-left: 2rem;
  width: 100%;
  height: 35px;
  font-size: 15px;
  font-weight: 550;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};

  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "50px"};
  border: ${(props) => (props.border ? props.border : "2px solid gray")};
`;
