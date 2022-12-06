import styled from "styled-components";

import { FaCaretDown, FaCaretUp } from "react-icons/fa";

//=============================================
export const QuestionSection = styled.div`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 100%;
  width: 100%;
  background: transparent;
  hr {
    width: 96%;
    height: 2px;
    background-color: gray;
    margin-bottom: 0.5rem;
  }
`;

export const QuestionHeader = styled.div`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 100%;
  width: 100%;
  margin-top: 1rem;

  hr {
    width: 96%;
    height: 2px;
    background-color: gray;
    margin-bottom: 0.5rem;
  }
`;
//---------------------------------
export const QuestionBody = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 3rem;
  padding-right: 2rem;
`;

export const Heading = styled.h3`
  margin-left: 1rem;
  margin-right: 1rem;
  color: #000;
  margin-bottom: 1rem;
  cursor: default;
`;
export const BodyTxt = styled.p`
  font-size: 17.5px;
  color: #57595d;
  margin-left: 1rem;
  margin-right: 1rem;
  cursor: default;
`;
//----------------------
export const QuestionFooter = styled.div`
  width: 100%;
  // border: 2px solid #c2c2c2;
  display: flex;
  align-items: center;
  padding-left: 4rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

//===================================================
export const CommentsSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  // border: 2px solid #aaa;
  margin-top: 0.4rem;
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  hr {
    width: 96%;
    background-color: gray;
    margin-top: 1rem;
  }
`;

export const TxtHeader = styled.h2`
  color: #57595d;
  padding-left: 0.5rem;
`;

//===================================================
//AnswerSection
//====================================================

export const AnswerSection = styled.div`
  width: 100%;
  // border: 2px solid #a1d;
  margin-bottom: 2rem;
  padding: 0.5rem;
`;

export const AnswerHeader = styled.div`
  // border: 2px solid #a4d;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
export const FilterContainer = styled.div`
  margin-right: 2rem;
`;
//---------------------------------------
export const AnswerBody = styled.div`
  display: flex;
`;

//=========================================
//votes icons
//========================================
export const Icon = styled.div`
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: darkslategrey;
  font-size: 20px;
`;
export const Txt = styled.p`
  align-self: center;
  font-size: 19px;
  font-weight: 600;
  color: ${(props) => (props.color ? props.color : "darkslategrey")};
  &:hover {
    cursor: default;
  }
`;
export const VotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VoteUp = styled(FaCaretUp)`
  color: purple;
  font-size: 75px;
  &:hover {
    cursor: pointer;
  }
`;
export const VoteDown = styled(FaCaretDown)`
  color: purple;
  font-size: 75px;
  &:hover {
    cursor: pointer;
  }
`;
//======================================
export const AnswerContent = styled.div`
  width: 100%;
  //border: 2px solid red;
`;
//---------------------------------------
export const AnswerFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  // border: 2px solid green;
  padding-right: 0.5rem;
  margin-top: 1rem;
`;
export const AnswerSubmit = styled.div``;
export const EditorBg = styled.div`
  background-color: white;
  margin-bottom: 2rem;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
`;

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  padding-right: 1rem;
`;
export const SubmitButton = styled.div`
  width: 20%;
  margin-bottom: 1rem;
`;
