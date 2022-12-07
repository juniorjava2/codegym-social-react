import { CustomSelect } from "../CustomSelect/CustomSelect";
import { TextInput } from "../TextInput/TextInput";
import {
  CopyRight,
  Creator,
  FooterContainer,
  FooterLink,
  LeftPart,
  MiddlePart,
  RightPart,
  Section1,
  Section2,
} from "./FooterStyle";

export const Footer = () => {
  return (
    <FooterContainer>
      <Section1>
        <LeftPart>
          <h2>Company</h2>
          <FooterLink href="#">Contact Us</FooterLink>
          <FooterLink href="#">About Us</FooterLink>
          <FooterLink href="#">Support</FooterLink>
        </LeftPart>
        <MiddlePart>
          <h2>Newsletter</h2>
          <p>
            Do you wish to know what people search most online? Then Subscribe
            to our Newsletter to get more than just that.
          </p>
          <TextInput type="email" placeholder="Enter your email" />
        </MiddlePart>
        <RightPart>
          <h2>Links</h2>
          <FooterLink href="#">FAQ</FooterLink>
          <FooterLink href="#">Terms</FooterLink>
          <FooterLink href="#">Privacy</FooterLink>
        </RightPart>
      </Section1>
      <hr />
      <Section2>
        <Creator>
          <p>
            Created with <span>&hearts;</span> by Techlaste Digital Team
          </p>
        </Creator>
        <CopyRight>
          <p>
            <span>&copy;</span>-{new Date().getFullYear()} All Rights Reserved.
          </p>
        </CopyRight>
      </Section2>
    </FooterContainer>
  );
};
