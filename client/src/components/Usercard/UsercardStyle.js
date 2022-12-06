import styled from "styled-components";

export const UserContainer = styled.div`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  //border: 2px solid orange;
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
`;
export const UserDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  //border: 2px solid blue;
  padding: 0.2rem;
  width: 50%;
`;
export const ProfileImg = styled.div`
  width: 50px;
  height: 50px;
  object-fit: contain;
  border: 1px solid black;
  border-radius: 50px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50px;
`;

export const UserName = styled.div`
  font-weight: 500;
  color: #6389f0;
`;

export const CreatedDate = styled.div`
  font-weight: 500;
  color: #6389f0;
`;
