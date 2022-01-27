import { GlobalStyles } from "./components/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
import Card from "./components/Card";
import cardContent from "./data/cardContent";
import Footer from "./components/Footer";

const theme = {
  color: {
    headerBg: "hsl(193, 100%, 96%)",
    textColor: "hsl(208, 11%, 55%)",
    footerBg: "hsl(192, 100%, 9%)",
    pink: "hsl(322, 100%, 66%)",
    white: `#fff`,
    black: `#000`,
  },

  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {cardContent.map((item, index) => (
            <Card id={index} item={item} key={index} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
