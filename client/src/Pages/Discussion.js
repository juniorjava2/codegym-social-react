import React, { useState, useEffect } from "react";
import { Layout } from "../layout/Layout";
import { Questions } from "../components/Questions/Questions";
import {
  LeftSection,
  MiddleSection,
  RightSection,
  SectionBox,
} from "../styles/Display";
import { Space } from "../components/SpaceContainer/Space";
import { PageTitle } from "../components/PageTitle/PageTitle";
import { QuestionData } from "../constants/constants";
import { LeftNav } from "../components/LeftNav/LeftNav";
import { TagsComp } from "../components/TagsComponent/TagsComp";

export default function Discussion() {
  //   const [nDate, setnDate] = useState("");
  const [QnNumber, setQnNumber] = useState();

  useEffect(() => {
    setQnNumber(QuestionData.length);
    // setnDate(new Date().toDateString());
  }, [QnNumber]);

  return (
    <Layout>
      <SectionBox>
        <LeftSection>
          <LeftNav />
          <TagsComp />
        </LeftSection>

        <MiddleSection>
          <PageTitle
            title="All Questions"
            number={QnNumber}
            subTitle="Questions"
          />
          <Questions />
        </MiddleSection>

        <RightSection>
          <Space />
        </RightSection>
      </SectionBox>
    </Layout>
  );
}
