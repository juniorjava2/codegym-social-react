import styled from "styled-components";

export const FormContainer = styled.div`
  background-color: #ebe3e3;
  border: 4px solid #ebe3e3;
  height: auto;
  width: 400px;
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem;
  p {
    margin-top: 1rem;
  }
  span {
    color: #a52bd2;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const TextField = styled.input`
  width: 100%;
  height: 35px;
  margin-bottom: 1rem;
  border: none;
`;

export const Label = styled.label`
  font-weight: 530;
  font-size: 20px;
`;
export const TextContainer = styled.div`
  align-items: center;
  p {
    margin-top: 1rem;
  }
  span {
    color: #a52bd2;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const AnimatedContainer = styled.div`
  .flip-in-left {
    animation: flip-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @keyframes flip-in-left {
    0% {
      transform: rotateY(80deg);
      opacity: 0;
    }
    100% {
      transform: rotateY(0);
      opacity: 1;
    }
  }
`;
