import React from "react";
import { PageTitleContainer, SubTitle, Title } from "./PageTitleStyle";

export const PageTitle = ({ title, number, subTitle }) => {
  const defaultTitle = "CODE GYM - Where Everyone can Learn, Share, & connect";
  const defaultSubTitle = "";
  return (
    <PageTitleContainer>
      <Title>{title ? title : defaultTitle}</Title>
      <SubTitle>
        {number} {subTitle ? subTitle : defaultSubTitle}
      </SubTitle>
    </PageTitleContainer>
  );
};
