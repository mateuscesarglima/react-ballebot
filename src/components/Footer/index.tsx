import React from "react";
import { Container, FooterImg } from "./styles";
import footerimg from "../../assets/ballerini.png";

const Footer = () => {
  return (
    <Container>
      <FooterImg src={footerimg} />
    </Container>
  );
};

export default Footer;
