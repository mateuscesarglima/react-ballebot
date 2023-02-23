import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }
   body{
      font-family: 'Sarala', sans-serif;
      background: linear-gradient(68.15deg, #2f2325 16.62%, #8e5d52 85.61%) ;
      -webkit-font-smoothing: antialiased;
   }

`;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px 20px;
`;
