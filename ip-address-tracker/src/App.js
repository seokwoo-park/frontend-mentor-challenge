import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

import { Container } from "./components/Container/Container.styled";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import { useEffect, useState } from "react";

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
  const [searchData, setSearchData] = useState("");
  const [location, setLocation] = useState([51.505, -0.09]);

  console.log(searchData);

  useEffect(() => {
    if (searchData) {
      const { lat, lng } = searchData;
      setLocation([lat, lng]);
    }
  }, [searchData]);
  console.log(searchData);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <Header setSearchData={setSearchData} />
          <Map location={location} />
          <Content searchData={searchData} />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
