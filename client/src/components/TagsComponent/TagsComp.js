import React from "react";
import { TagsContainer, TagsContent, TagsTitle } from "./TagsCompStyle";

export const TagsComp = () => {
  return (
    <TagsContainer>
      <TagsTitle>Most Popular Tags</TagsTitle>
      <hr />
      <TagsContent>Html</TagsContent>
      <hr />
      <TagsContent>Node.js</TagsContent>
      <hr />
      <TagsContent>Vanilla Javascript</TagsContent>
      <hr />
      <TagsContent>Next js</TagsContent>
      <hr />
      <TagsContent>React Js</TagsContent>
    </TagsContainer>
  );
};
