import { ThemeProvider } from "styled-components";
import { Header, Hero, Content } from "./components/index";

function App() {
  const theme = {
    color: {
      cyan: "hsl(180, 66%, 49%)",
      darkViolet: "hsl(257, 27%, 26%)",
      red: "hsl(0, 87%, 67%)",
      gray: "hsl(0, 0%, 75%)",
      grayishViolet: "hsl(257, 7%, 63%)",
      veryDarkBlue: "hsl(255, 11%, 22%)",
      veryDarkViolet: "hsl(260, 8%, 14%)",
    },

    media: {
      mobile: "450px",
    },
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Hero />
        <Content />
      </ThemeProvider>
    </>
  );
}

export default App;
