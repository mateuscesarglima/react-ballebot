import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global/styles";
import themes from "./global/themes";

import Home from "./Pages/Home";

function App(): JSX.Element {
  return (
    <ThemeProvider theme={themes}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
