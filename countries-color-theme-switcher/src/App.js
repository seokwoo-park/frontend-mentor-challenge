import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Header, Home } from "./components/index";
import { getCountryAll } from "./helpers/getCountryAll";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [allCountry, setAllCountry] = useState("");
  const [currentCountry, setCurrentCountry] = useState("");

  console.log(allCountry);
  console.log(currentCountry);

  useEffect(() => {
    const initData = async () => {
      const response = await getAllCountry();
      setAllCountry(response);
      showRandomCountry(response);
    };

    initData();
  }, []);

  const getAllCountry = async () => {
    const { data } = await getCountryAll();
    let dataArray = [];

    await data.map(({ name, population, region, capital, flags }) => {
      dataArray.push({ name, population, region, capital, flags });
    });

    return dataArray;
  };

  const showRandomCountry = (array) => {
    const result = [];
    for (let i = 0; i < 8; i++) {
      const randomCountry = array[Math.floor(Math.random() * array.length)];
      result.push(randomCountry);
    }
    setCurrentCountry(result);
  };

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
      <Home darkMode={darkMode} currentCountry={currentCountry} />
    </ThemeProvider>
  );
}

export default App;
