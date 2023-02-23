import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 22px 0;
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
