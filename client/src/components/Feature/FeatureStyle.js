import styled from "styled-components";
import ImgBg from "../../assets/images/Background1.png";

export const FeatureContainer = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(165, 85, 227, 0.7),
      rgba(242, 229, 252, 0.5)
    ),
    url(${ImgBg});
  height: 100%;
  background-position: center;
  background-size: cover;
  display: flex;
  flex: 100%;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex: 50%;

  flex-direction: column;

  padding-top: 5rem;
  padding-left: 7rem;
`;

export const HeaderText = styled.h1`
  color: white;
  font-size: 40px;
  text-transform: uppercase;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export const MediumText = styled.h2`
  color: white;
  font-size: 30px;
`;
export const SmalleryText = styled.h3`
  color: white;
`;

export const Engagements = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 5rem;
  padding: 0.8rem;
`;
export const EHeading = styled.h2`
  color: #a52bd2 !important;
`;

export const EBody = styled.div`
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  // border: 2px solid #a52bd2;
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const EIcon = styled.div`
  width: 35px;
  height: 20px;
  //border: 1px solid yellow;
  object-fit: cover;
`;

export const Icons = styled.div`
  width: 35px;
  height: 40px;
  //border: 1px solid yellow;
  object-fit: cover;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MessageIcn = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const EText = styled.h3`
  text-align: center;
  color: #a52bd2;
  font-weight: 650;
  margin-left: 1rem;
  display: flex;
`;

export const Quote = styled.p`
  color: #357ffc;
  font-size: 25px;
  font-weight: 700;
  margin-top: 15rem;
  margin-bottom: 10rem;
`;
//------------------------------------
export const RightContainer = styled.div`
  display: flex;
  flex: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    margin-top: 1rem;
  }
`;

export const LoginSpan = styled.a`
  color: #357ffc;
  text-decoration: none;
`;
