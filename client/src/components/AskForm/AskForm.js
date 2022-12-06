import React from "react";
import { useNavigate } from "react-router-dom";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import Editor from "../Editor/Editor";
import { Button } from "../Buttons/Button";
import {
  AskFormContainer,
  ButtonWrapper,
  InputWrapper,
  RichTextEditor,
  TxtInput,
} from "./AskFormStyle";

export const AskForm = () => {
  const navigate = useNavigate();
  return (
    <AskFormContainer>
      <InputWrapper>
        <h2>Title</h2>
        <p>Be very precise and imagine that you are asking your buddy</p>
        <TxtInput type="text" placeholder="" />
      </InputWrapper>
      <InputWrapper>
        <h2>Body</h2>
        <p>
          Here make a very detailed explanation of your problem, expectations
          and all the info needed for it to be answered.
        </p>
        <RichTextEditor>
          <Editor />
        </RichTextEditor>
      </InputWrapper>

      <InputWrapper>
        <h2>Tag Name</h2>
        <p>Add upto five (5) tags</p>
        <TxtInput type="text" placeholder="" />
      </InputWrapper>
      <div className="spaces">
        <h2>Select Space</h2>
        <CustomSelect />
      </div>
      <ButtonWrapper>
        <Button
          label="Cancel"
          backgroundColor="red"
          onClick={() => navigate("/discussion")}
        />
        <Button label="Submit" />
      </ButtonWrapper>
    </AskFormContainer>
  );
};
