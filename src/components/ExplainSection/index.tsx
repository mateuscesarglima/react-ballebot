import React from "react";
import { Container, Item, Title } from "./styles";

const ExplainSection = () => {
  return (
    <Container>
      <Title>O que ela faz por você?</Title>
      <ul>
        <Item>
          1. Cria um <strong>sistema de verificação capcha</strong> para novos
          membros garantirem que não são robôs
        </Item>
        <Item>
          2. Possui um <strong>sistema de banimento automático</strong> para
          links suspeitos que forem enviados na comunidade
        </Item>
        <Item>
          3. <strong>Sistema de avisos e banimento manual</strong>, para pessoas
          administradoras utilizarem
        </Item>
      </ul>
    </Container>
  );
};

export default ExplainSection;
