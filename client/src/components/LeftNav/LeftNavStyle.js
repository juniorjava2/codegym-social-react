import styled from "styled-components";

export const LeftNavContainer = styled.div`
  background-color: #ebe3e3;
  border: 1px solid #707070;
  margin-top: 3rem;

  border-radius: 0 0 10px 10px;
  padding-bottom: 1rem;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const LinkContainer = styled.div`
  background-color: #efecec;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 2rem;
  width: 100%;
  p {
    font-weight: bold;
  }
  &:hover {
    background-color: #ece0f0;
    cursor: pointer;
  }
`;

export const BtnContainer = styled.div`
  width: 75%;
  margin-left: 1rem;
  margin-top: 1rem;
  height: 30px;
  text-align: center;
  background-color: #a52bd2;
  border-radius: 50px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-out;
  color: white;

  &:hover {
    transition: 0.3s ease-out;
    cursor: pointer;
    color: #357ffc !important;
    background-color: white;
    border: 2px solid #357ffc;
  }
`;

export const AskBtn = styled.a`
  text-decoration: none;
  color: inherit;
  font-weight: 550;
`;
