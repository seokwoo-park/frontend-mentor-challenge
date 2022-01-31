import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');

// Normalize CSS

    ${normalize}
    // Global Styles Start here //
     *{
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 18px;
    }
    body {
        overflow-x: hidden;
    }

p {
    color : hsl(257, 7%, 63%);
}

h1,h2,h3 {
    font-weight: 700;
}


`;
