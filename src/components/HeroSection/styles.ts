import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 75px;
`;
export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.page_title};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 4rem;
`;
export const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.nav_link};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.5rem;
`;
export const Button = styled.button`
  background-color: #ecd6c4;
  border-radius: 20px;
  width: 200px;
  height: 70px;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;
export const RightSide = styled.div``;
export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
export const BalleBotImg = styled.img``;
