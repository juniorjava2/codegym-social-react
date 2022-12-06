import React from "react";
import { useAuth, AuthConsumer } from "../../hooks/useAuth";
import { data } from "../../constants/constants";
import {
  Badge,
  FooterTxt,
  HeaderText,
  PlusIcon,
  SpaceBody,
  SpaceContainer,
  SpaceFooter,
  Spaces,
  SpaceTitle,
  SpaceTxt,
  TxtWrapper,
} from "./SpaceStyle";

export const Space = () => {
  const { authStatus } = useAuth();
  return (
    <SpaceContainer>
      <AuthConsumer>
        {({ isAuth = authStatus.isAuth }) => (
          <>
            <SpaceTitle>
              <HeaderText>Spaces To Follow</HeaderText>
            </SpaceTitle>

            {data.map(({ id, name }) => (
              <SpaceBody key={id}>
                <Spaces>
                  <SpaceTxt>{name}</SpaceTxt>
                  {isAuth && (
                    <>
                      <Badge>{id}</Badge>
                    </>
                  )}
                </Spaces>
              </SpaceBody>
            ))}

            <SpaceFooter>
              <TxtWrapper>
                <FooterTxt>Discover</FooterTxt>
                <PlusIcon />
              </TxtWrapper>
            </SpaceFooter>
          </>
        )}
      </AuthConsumer>
    </SpaceContainer>
  );
};
