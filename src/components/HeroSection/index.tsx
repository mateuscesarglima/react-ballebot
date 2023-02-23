import React from "react";
import {
  Container,
  LeftSide,
  Title,
  Subtitle,
  Button,
  RightSide,
  BalleBotImg,
} from "./styles";
import ballebotimg from "../../assets/ballebotimg.png";
import { Wrapper } from "../../global/styles";

const HeroSection = () => {
  return (
    <div style={{ borderTop: "0.4px solid #fff2e7" }}>
      <Wrapper>
        <Container>
          <LeftSide>
            <Title>Balle Bot</Title>
            <Subtitle>Deixe a sua comunidade segura de um jeito fácil</Subtitle>
            <Button>Me adicione!</Button>
          </LeftSide>
          <RightSide>
            <BalleBotImg src={ballebotimg} />
          </RightSide>
        </Container>
      </Wrapper>
    </div>
  );
};

export default HeroSection;
