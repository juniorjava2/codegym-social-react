import styled from "styled-components";
import { color } from "styled-system";

export const CustomButton = styled.button`
  width: 100%;
  height: 30px;
  text-align: center;
  ${color}
  border-radius: 50px;
  border: 2px solid #357ffc;
  font-weight: 550;
  margin-left: 1rem;
  .active {
    color: blue;
  }
`;
