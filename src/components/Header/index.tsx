import logo from "../../assets/logo.png";
import { Wrapper } from "../../global/styles";
import { Container, Link, Logo, Navigation } from "./styles";

const Header = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Header;
