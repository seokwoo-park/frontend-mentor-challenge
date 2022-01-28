import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap');

html { box-sizing: border-box; }

*, *:before, *:after { box-sizing: inherit; }

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  font-weight: normal;
  margin: 0;
  padding: 0;
  font-family: 'Rubik', sans-serif;
  font-size: 18px;
}

ol, ul { list-style: none; }

img {
  height: auto;
  max-width: 100%; }

`;
