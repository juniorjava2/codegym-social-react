import styled from "styled-components";

export const QnContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 100%;
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  hr {
    width: 96%;
    height: 2px;
    background-color: gray;
  }
`;

export const QnHeader = styled.div`
  display: flex;
  width: 100%;
  // border: 1px solid black;
`;
export const QnBody = styled.div`
  // border: 2px solid blue;
  display: flex;
  flex-direction: column;
  padding-left: 3rem;
  padding-right: 2rem;
`;

export const HeaderText = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-left: 1rem;
  margin-right: 1rem;
  color: #000;
  cursor: pointer;
`;
export const BodyText = styled.p`
  color: #57595d;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-left: 1rem;
  margin-right: 1rem;
  cursor: pointer;
`;
export const QnFooter = styled.div`
  // border: 2px solid cyan;
  display: flex;
  width: 100%;
  margin-top: 2rem;
  height: auto;
  padding: 0.1rem;
  align-items: center;
  justify-content: space-around;
  text-align: center;
`;
export const IconsWrapper = styled.div`
  display: flex;
  width: auto;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  // border: 1px solid purple;

  text-align: center;
  /* span {
    margin-bottom: 0.7rem;
    h1 {
      padding-bottom: 25px;
      font-weight: 500;
    }
  } */
`;
export const IconsContainer = styled.div`
  align-items: center;
  justify-content: center;
  object-fit: contain;
  height: 30px;
  // background-color: yellow;
  //border: 1px solid red;
  width: 30px;
  display: flex;
  margin-right: 1rem;
  align-items: center;
  justify-content: center;
`;

export const Icons = styled.svg`
  font-size: 25px;
  color: #57595d;
  // border: 1px solid black;
  height: 100%;
  width: 100%;
`;
