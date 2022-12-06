import React from "react";
import { Layout } from "../layout/Layout";
import {
  LeftSection,
  MiddleSection,
  RightSection,
  SectionBox,
} from "../styles/Display";
import { Space } from "../components/SpaceContainer/Space";
import { LeftNav } from "../components/LeftNav/LeftNav";
import { QuestionDetail } from "../components/QuestionDetails/QuestionDetail";

export default function QuestionDetails() {
  return (
    <Layout>
      <SectionBox>
        <LeftSection>
          <LeftNav />
        </LeftSection>
        <MiddleSection>
          <QuestionDetail />
        </MiddleSection>
        <RightSection>
          <Space />
        </RightSection>
      </SectionBox>
    </Layout>
  );
}
