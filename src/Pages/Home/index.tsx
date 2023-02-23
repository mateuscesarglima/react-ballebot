import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import { Container } from "./styles";
const Home = () => {
  return (
    <Container>
      <Header />
      <main>
        <HeroSection />
      </main>
    </Container>
  );
};

export default Home;
