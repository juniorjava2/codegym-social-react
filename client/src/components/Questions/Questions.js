import React, { useState, useEffect } from "react";
import { Usercard } from "../Usercard/Usercard";
// import { QuestionData } from "../../constants/constants";
// import IconButton from "@material-ui/core/IconButton";
// import MoreHoriz from "@material-ui/icons/MoreHoriz";

import {
  IconsContainer,
  QnBody,
  QnContainer,
  QnFooter,
  QnHeader,
  Icons,
  HeaderText,
  BodyText,
  IconsWrapper,
} from "./QuestionStyles";
//import { FaComments, FaDotCircle, FaInstagram } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { GoComment } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Questions = (data) => {
  let navigate = useNavigate();
  const [listOfQuestions, setListOfQuestions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/question", {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        setListOfQuestions(response.data);
      });
  }, []);

  useEffect(() => {
    console.log(listOfQuestions);
  }, [listOfQuestions]);
  return (
    <>
      {listOfQuestions.map(({ id, title, qnBody, createdAt, username }) => (
        <QnContainer key={id}>
          <QnHeader>
            <Usercard name={username} created_at={createdAt} />
          </QnHeader>

          <hr />
          <QnBody>
            <HeaderText onClick={() => navigate(`/question/${id}`)}>
              {title}
            </HeaderText>
            <BodyText onClick={() => navigate(`/question/${id}`)}>
              {qnBody}
            </BodyText>
          </QnBody>
          <QnFooter>
            <IconsWrapper>
              <IconsContainer>
                <Icons>
                  <GoComment />
                </Icons>
              </IconsContainer>
              <span>48</span>
            </IconsWrapper>

            <IconsWrapper>
              <IconsContainer>
                <Icons>
                  <FaEye />
                </Icons>
              </IconsContainer>

              <span>20 views</span>
            </IconsWrapper>

            <IconsWrapper>
              <span>40 Answers</span>
            </IconsWrapper>

            <IconsWrapper>
              {/* <span>
                <IconButton aria-label="settings">
                  <MoreHoriz onClick={() => navigate.push(`/question/${id}`)} />
                </IconButton>
              </span> */}
            </IconsWrapper>
          </QnFooter>
        </QnContainer>
      ))}
    </>
  );
};
