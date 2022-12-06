import styled from "styled-components";

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid gray;
  border-radius: 15px;
  margin-top: 1rem;
  background-color: aliceblue;
  padding: 0.5rem;
  hr {
    width: 90%;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }
`;

export const TagsTitle = styled.h3`
  text-align: center;
  color: purple;
  font-style: italic;
  margin-bottom: 0.5rem;
`;

export const TagsContent = styled.p`
  font-weight: 550;
  font-style: italic;
  text-align: left;
  margin-left: 1rem;
  color: dodgerblue;
`;
