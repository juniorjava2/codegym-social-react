import React from "react";
import pro from "../../assets/images/horse.jpg";
import {
  CreatedDate,
  ProfileImg,
  UserContainer,
  UserName,
  UserDetails,
  Img,
} from "./UsercardStyle";

export const Usercard = ({ name, created_at }) => {
  return (
    <UserContainer>
      <UserDetails>
        <ProfileImg>
          <Img src={pro} alt="profile" />
        </ProfileImg>
        <UserName>{name}</UserName>
      </UserDetails>
      <CreatedDate>{created_at}</CreatedDate>
    </UserContainer>
  );
};
