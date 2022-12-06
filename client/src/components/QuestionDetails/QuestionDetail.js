import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Usercard } from "../Usercard/Usercard";
import Editor from "../Editor/Editor";
import { Button } from "../Buttons/Button";
import { Answer } from "../Answer/Answer";
import axios from "axios";
import {
  AnswerSection,
  BodyTxt,
  BtnContainer,
  CommentBody,
  CommentFooter,
  CommentHeader,
  CommentsSection,
  EditorBg,
  Heading,
  Icon,
  IconsContainer,
  InputWrapper,
  LeftIcons,
  QnDetailContainer,
  QuestionBody,
  QuestionFooter,
  QuestionHeader,
  QuestionSection,
  RightIcons,
  SubmitButton,
  TagsContent,
  Txt,
  TxtHeader,
} from "./QuestionDetailStyle";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { TextInput } from "../TextInput/TextInput";

export const QuestionDetail = ({ question }) => {
  const [postObject, setPostObject] = useState({});
  //const [CommentId, setCommentId] = useState();

  let { id } = useParams();
  //let history = useHistory();
  //setCommentId(useParams());
  useEffect(() => {
    axios.get(`http://localhost:3001/question/byId/${id}`).then((response) => {
      setPostObject(response.data);
      console.log(response.data);
    });
  }, []);

  useEffect(() => {
    console.log(id);
    console.log(postObject);
  }, []);
  return (
    <>
      <QnDetailContainer>
        {/* {listOfQuestions.map(({ id, title, qnBody, createdAt, username }) => ( */}

        <QuestionSection>
          <QuestionHeader>
            <Usercard name={postObject.username} created_at="Asked 4days ago" />
            <hr />
          </QuestionHeader>
          <QuestionBody>
            <Heading>{postObject.title}</Heading>
            <BodyTxt>{postObject.qnBody}</BodyTxt>
          </QuestionBody>
          <QuestionFooter>
            <TagsContent>
              <p>Flutter</p>
            </TagsContent>
            <TagsContent backgroundColor="green">
              <p>Node.js</p>
            </TagsContent>
            <TagsContent backgroundColor="purple">
              <p>css</p>
            </TagsContent>
            <TagsContent backgroundColor="orange">
              <p>Styled Component</p>
            </TagsContent>
          </QuestionFooter>
        </QuestionSection>

        <hr />
        <CommentsSection>
          <TxtHeader>Comments</TxtHeader>
          <CommentHeader>
            <Usercard name="Elijah Ford" />
          </CommentHeader>
          <CommentBody>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </CommentBody>
          <CommentFooter>
            <LeftIcons>
              <IconsContainer>
                <Txt>29</Txt>
                <Icon>
                  <FaThumbsUp />
                </Icon>
              </IconsContainer>
              <IconsContainer>
                <Txt>13</Txt>
                <Icon>
                  <FaThumbsDown />
                </Icon>
              </IconsContainer>
              <Txt color="red">Delete</Txt>
            </LeftIcons>

            <RightIcons>
              <Txt color="limegreen">1minute ago</Txt>
            </RightIcons>
          </CommentFooter>
          <hr />
          <InputWrapper>
            <TextInput
              type="text"
              borderRadius="5px"
              placeholder="Add Comment"
            />
          </InputWrapper>
        </CommentsSection>

        <AnswerSection>
          <Answer />
        </AnswerSection>
      </QnDetailContainer>
      <div>
        <TxtHeader>Your Answer</TxtHeader>
        <EditorBg>
          <Editor placeholder="Write your Answer" />
          <BtnContainer>
            <SubmitButton>
              <Button label="Submit" backgroundColor="dodgerblue" />
            </SubmitButton>
          </BtnContainer>
        </EditorBg>
      </div>
    </>
  );
};
