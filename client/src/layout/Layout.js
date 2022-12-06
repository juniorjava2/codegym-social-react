import React from "react";
import { GlobalStyle } from "../styles/globals";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <GlobalStyle />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
