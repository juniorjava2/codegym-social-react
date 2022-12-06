import styled from "styled-components";

export const Select = styled.div`
  position: relative;
  select {
    /* box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5); */
    border: none;
    background-color: whitesmoke;
    color: gray;
    font-weight: 500;
    padding: 0.5em 4em 0.5em 1em;
    font-size: 1rem;
  }
  .span-arrow {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    background-color: lightgrey;
    height: 100%;
    width: 1.5rem;
    pointer-events: none;
    align-items: center;
    justify-content: center;
  }
  /* 
  .custom-arrow::before,
  .custom-arrow::after {
    content: "";
    width: 0;
    height: 0;
  }
  .custom-arrow::before {
    border-bottom: 0.8em solid lightgrey;
    border-left: 0.8em solid transparent;
    border-right: 0.8em solid transparent;
  }
  .custom-arrow::after {
    border-top: 0.8em solid lightgray;
    border-left: 0.8em solid transparent;
    border-right: 0.8em solid transparent;
  } */

  .triangle-up {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid whitesmoke;
    margin-bottom: 0.3rem;
  }
  .triangle-down {
    width: 2px;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid whitesmoke;
  }
`;
