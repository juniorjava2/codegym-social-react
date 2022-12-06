import styled from "styled-components";
import { FaPlusCircle } from "react-icons/fa";

export const SpaceContainer = styled.div`
  background-color: transparent;

  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 100%;
  width: 100%;
`;

export const SpaceTitle = styled.div`
  display: flex;
  border: 1px solid #707070;
  background-color: #ebe3e3;
  margin-bottom: 1.5rem;
  padding: 0.5rem;
  border-radius: 10px;
`;
export const HeaderText = styled.h2`
  color: #357ffc;
  font-size: 20px;
`;

export const SpaceBody = styled.div`
  background-color: #ebe3e3;
  //border: 1px solid #707070;
  width: 100%;
  height: 100%;
  padding-bottom: 0.3rem;
`;

export const Spaces = styled.div`
  position: relative;
  color: black;
  border: 1px solid #707070;
  padding: 0.5rem;
  background-color: #f9f9f9;
  font-weight: 600;
  font-size: 20px;
  &:hover {
    cursor: pointer;
    background-color: #ddd;
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  padding: 5px 10px;
  border-radius: 50%;
  background: red;
  color: white;
`;
export const SpaceTxt = styled.h4`
  color: black;

  font-weight: 600;
  font-size: 20px;
`;
export const SpaceFooter = styled.div`
  border: 1px solid #707070;
  background-color: #d2d2d2;
  margin-top: 0.5rem;
  width: 100%;
  height: 45px;
  padding: 0.5rem;
  border-radius: 0 0 20px 20px;
  &:hover {
    cursor: pointer;
  }
`;
export const TxtWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  //border: 1px solid black;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 100%;
`;
export const FooterTxt = styled.h4`
  color: #357ffc;
`;

export const PlusIcon = styled(FaPlusCircle)`
  font-size: 20px;
  color: #a52bd2;
`;
