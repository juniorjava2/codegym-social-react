import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: #9d96bb;
`;

export const Section1 = styled.div`
  display: flex;
  flex: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  padding-top: 2rem;
  margin-bottom: 2rem;
`;

export const LeftPart = styled.div`
  flex: 20%;
  display: flex;
  flex-direction: column;
  color: whitesmoke;
  padding-left: 2rem;
`;
export const MiddlePart = styled.div`
  padding: 0.5rem;
  flex: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: whitesmoke;
  margin-left: 1rem;
  margin-right: 1rem;
  p {
    text-align: center;
  }
`;

export const RightPart = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  flex: 20%;
  color: whitesmoke;
`;

export const FooterLink = styled.a`
  color: whitesmoke;
  text-decoration: none;
`;

//-----------------------------------
export const Section2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2rem;
  margin-top: 0.5rem;
  color: whitesmoke;
`;

export const Creator = styled.div`
  padding-left: 2rem;
  p {
    font-size: 15px;
    font-weight: 500;
  }
  span {
    color: red;
    font-size: 30px;
  }
`;
export const CopyRight = styled.div`
  padding-right: 2rem;
  p {
    font-size: 15px;
    font-weight: 500;
  }
  span {
    font-size: 20px;
  }
`;
