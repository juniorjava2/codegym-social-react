import React from "react";

import {
  AskBtn,
  BtnContainer,
  LeftNavContainer,
  LinkContainer,
} from "./LeftNavStyle";

export const LeftNav = () => {
  return (
    <LeftNavContainer>
      <LinkContainer>
        <p>Home</p>
      </LinkContainer>
      <hr />
      <LinkContainer>
        <p>Filter</p>
      </LinkContainer>
      <hr />
      <LinkContainer>
        <p>Tags</p>
      </LinkContainer>
      <hr />
      <BtnContainer>
        <AskBtn href="/ask">Ask Question</AskBtn>
      </BtnContainer>
    </LeftNavContainer>
  );
};
