import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

import { Container } from "./components/Container/Container.styled";
import Header from "./components/Header/Header";

const theme = {
  color: {
    VeryDarkGray: "hsl(0, 0%, 17%)",
    DarkGray: "hsl(0, 0%, 59%)",
  },

  fontWeight: {
    regular: "400",
    medium: "500",
    bold: "700",
  },

  media: {
    mobile: "450px",
  },
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <Header />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
