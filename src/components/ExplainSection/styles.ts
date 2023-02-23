import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
  margin-top: 50px;

  > ul {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const Title = styled.h3`
  font-family: ${(props) => props.theme.fonts.page_title};
  font-size: 24px;
  border-top: 0.4px solid #fff2e7;
  padding-top: 50px;
`;

export const Item = styled.div`
  font-family: ${(props) => props.theme.fonts.nav_link};
  font-size: 18px;
`;
