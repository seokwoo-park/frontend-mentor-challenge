import { ThemeProvider } from "styled-components";

function App() {
  const theme = {
    fontWeight: {
      small: "300",
      medium: "600",
      large: "800",
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
      <div className="App">
        <h1>Hello world</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
