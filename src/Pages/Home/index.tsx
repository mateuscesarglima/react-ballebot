import ExplainSection from "../../components/ExplainSection";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import { Container } from "./styles";
const Home = () => {
  return (
    <Container>
      <Header />
      <main>
        <HeroSection />
        <ExplainSection />
      </main>
      <Footer />
    </Container>
  );
};

export default Home;
