import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/index";
import { Container } from "./components/Reusable/Container.styled";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  console.log("Is DarkMode ? " + darkMode);

  const theme = {
    fontWeight: {
      small: "300",
      medium: "600",
      large: "800",
    },
    media: {
      mobile: "420px",
    },
    color: {
      // Light Mode Text
      lightModeText: "hsl(200, 15%, 8%)",
      // Dark Mode Text & Light Mode Elements
      white: "hsl(0, 0%, 100%)",
      // Dark Mode Elements
      darkBlue: "hsl(209, 23%, 22%)",
      // Dark Mode Background
      veryDarkBlue: "hsl(207, 26%, 17%)",
      // Light Mode Background
      veryLightGray: "hsl(0, 0%, 98%)",
      // Light Mode Input
      darkGray: "hsl(0, 0%, 52%)",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Container padding={"2% 5%"}>
        <h1>Hello World</h1>
      </Container>
    </ThemeProvider>
  );
}

export default App;
