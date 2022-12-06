import styled from "styled-components";

export const NavContainer = styled.nav`
  background-color: #9d96bb;
  height: 80px;
  display: flex;
  flex: 100%;
  align-items: center;
  justify-content: center;
`;
export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
  margin-left: 1rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 5%;
  margin-left: 2rem;
`;
export const Logo = styled.h1`
  color: black;
  font-weight: 900;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 30px;
  span {
    color: #0b89e9;
  }
  a {
    text-decoration: none;
  }
`;
export const SearchContainer = styled.div`
  display: flex;
  flex: 60%;
  align-items: center;
  justify-content: center;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
`;
export const Search = styled.input`
  height: 35px;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 50px;
  border: none;
  text-align: center;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex: 10%;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const NavLinks = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 600;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex: 25%;
  align-items: center;
  justify-content: space-between;
  margin-right: 2rem;
  margin-left: 1rem;
`;
export const Login = styled.button``;
