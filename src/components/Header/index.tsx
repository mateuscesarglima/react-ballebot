import React from "react";
import { Container, Logo, Navigation, Link } from "./styles";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <Container>
      <Logo src={logo} />
      <Navigation>
        <ul>
          <li>
            <Link href="#">Comunidade Ballerini</Link>
          </li>
          <li>
            <Link href="#">Tutorial</Link>
          </li>
          <li>
            <Link href="#">Open Source</Link>
          </li>
          <li>
            <Link href="#">Comandos</Link>
          </li>
        </ul>
      </Navigation>
    </Container>
  );
};

export default Header;
