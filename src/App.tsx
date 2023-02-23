import { GlobalStyles } from "./global/styles/styles";
import { ThemeProvider } from "styled-components";
import theme from "./global/themes/theme";
import { Teste } from "./styles";

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Teste>Ballebot</Teste>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
