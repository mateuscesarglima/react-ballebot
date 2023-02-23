import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 32px 0;
  border-bottom: 1px solid #fff2e7;
`;
export const Logo = styled.img``;
export const Navigation = styled.div`
  > ul {
    display: flex;
    gap: 40px;
    list-style: none;
    > li > a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 400;
    }
  }
`;
export const Link = styled.a``;
