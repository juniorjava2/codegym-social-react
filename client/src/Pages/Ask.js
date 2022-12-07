import React from "react";
import { Layout } from "../layout/Layout";

import { LeftSide, RightSide, SectionBox } from "../styles/Display";
import { Space } from "../components/SpaceContainer/Space";
import { AskForm } from "../components/AskForm/AskForm";
import { Modal } from "../components/Modal/Modal";
import { PageTitle } from "../components/PageTitle/PageTitle";

export default function Ask() {
  return (
    <Layout>
      <SectionBox>
        <Modal
          message={"Question Successfully created"}
          color="lightgreen"
          show={false}
        />
        <LeftSide>
          <PageTitle title="Ask Your Question..." />
          <AskForm />
        </LeftSide>
        <RightSide>
          <Space />
        </RightSide>
      </SectionBox>
    </Layout>
  );
}
