import React from "react";
import { Form } from "../Form/Form";
import Upvote from "../../assets/images/ArrowUpLg.svg";
import Downvote from "../../assets/images/ArrowDownLg.svg";
import MessageIcon from "../../assets/images/Messages.png";
import Add from "../../assets/images/page_add.png";
import {
  EBody,
  EHeading,
  EIcon,
  Engagements,
  EText,
  FeatureContainer,
  HeaderText,
  Icons,
  IconsContainer,
  Img,
  LeftContainer,
  LoginSpan,
  MediumText,
  MessageIcn,
  Quote,
  RightContainer,
  SmalleryText,
} from "./FeatureStyle";

export const Feature = ({ onChange, login, logout }) => {
  return (
    <FeatureContainer>
      <LeftContainer>
        <MediumText>Welcome to the</MediumText>
        <HeaderText>Code Gym Community</HeaderText>
        <SmalleryText>Your Solution awaits . . .</SmalleryText>
        <Engagements>
          <EHeading>Join Our community Today and Enjoy!</EHeading>
          <EBody>
            <IconsContainer>
              <EIcon>
                <Img src={Upvote} alt="Upvoter" />
              </EIcon>
              <EIcon>
                <Img src={Downvote} alt="Upvoter" />
              </EIcon>
            </IconsContainer>
            <EText>Upvote or Downvote Answers</EText>
          </EBody>
          <EBody>
            <IconsContainer>
              <Icons>
                <MessageIcn src={MessageIcon} alt="Upvoter" />
              </Icons>
            </IconsContainer>
            <EText>Upvote or Downvote Answers</EText>
          </EBody>
          <EBody>
            <IconsContainer>
              <Icons>
                <MessageIcn src={Add} alt="Upvoter" />
              </Icons>
            </IconsContainer>
            <EText>And do Much more than you can ever imagine.</EText>
          </EBody>
        </Engagements>
        <Quote>
          "__Ask and you`ll receive
          <br /> knock and the door will be open <br />
          seek and you will find.__"
        </Quote>
      </LeftContainer>
      <RightContainer>
        <Form />
      </RightContainer>
    </FeatureContainer>
  );
};
