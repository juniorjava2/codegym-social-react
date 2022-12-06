import React, { useEffect } from "react";
import { Button } from "../Buttons/Button";
import { useNavigate } from "react-router-dom";

import {
  NavContainer,
  Logo,
  LogoContainer,
  SearchContainer,
  Search,
  NavLinks,
  ButtonContainer,
  ProfileWrapper,
} from "./NavbarStyles";

import axios from "axios";
import { useAuth, AuthConsumer } from "../../hooks/useAuth";

export const Navbar = () => {
  const { authStatus, setAuthStatus } = useAuth();
  const { setVisible } = useAuth();

  const navigate = useNavigate();

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/auth/auth", {
  //       headers: {
  //         accessToken: localStorage.getItem("accessToken"),
  //       },
  //     })
  //     .then((response) => {
  //       if (response.data.error) {
  //         setAuthStatus({ ...authStatus, isAuth: false });
  //       } else {
  //         setAuthStatus({
  //           username: response.data.username,
  //           id: response.data.id,
  //           isAuth: true,
  //         });
  //       }
  //     });
  // }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthStatus({ username: "", id: 0, isAuth: false });
    navigate("/");
  };

  return (
    <NavContainer>
      <AuthConsumer>
        {({ isAuth = authStatus.isAuth }) => (
          <>
            <LogoContainer>
              <Logo>
                <a href="/">
                  Code<span>Gym</span>
                </a>
              </Logo>
            </LogoContainer>
            <SearchContainer>
              <Search type="text" placeholder="Search" />
            </SearchContainer>

            <ProfileWrapper>
              <NavLinks href="/discussion">Discussion</NavLinks>
            </ProfileWrapper>
            <ProfileWrapper>
              {isAuth && <NavLinks href="/profile">Profile</NavLinks>}
            </ProfileWrapper>

            {!isAuth ? (
              <>
                <ButtonContainer>
                  <Button
                    label="Login"
                    onClick={() => {
                      setVisible(false);
                      navigate("/");
                    }}
                  />
                  <Button
                    label="Sign up"
                    border=" 2px solid #357ffc"
                    backgroundColor="white"
                    textColor="#357ffc"
                    onClick={() => {
                      navigate("/");
                      setVisible(true);
                    }}
                  />
                </ButtonContainer>
              </>
            ) : (
              <>
                <ButtonContainer>
                  <Button
                    label="Logout"
                    onClick={() => {
                      logout();
                      navigate("/");
                    }}
                  />
                </ButtonContainer>
              </>
            )}
          </>
        )}
      </AuthConsumer>
    </NavContainer>
  );
};
