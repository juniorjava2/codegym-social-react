import styled from "styled-components";

export const AskFormContainer = styled.div`
  background-color: #ebe3e3;
  border: 2px solid #707070;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  object-fit: contain;
  margin-top: 7rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  .spaces {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    h2 {
      margin-right: 1rem;
      color: #57595d;
    }
  }
`;

export const RichTextEditor = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  flex: 1;
  width: 100%;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;
export const TxtInput = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 5px;
  background-color: whitesmoke;
  border: 1px solid lightgray;
  margin-bottom: 1rem;
`;
export const InputWrapper = styled.div`
  // margin-right: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #57595d;
  //border: 2px solid green;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 90%;
  margin-top: 2rem;
  justify-content: space-between;
`;
