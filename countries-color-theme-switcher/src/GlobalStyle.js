import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');
${normalize}
   
    *{
        margin: 0;
        padding: 0;
        transition: all 0.5s ease-in-out;


    }

    body {
        box-sizing: border-box;
        font-family: 'Nunito Sans', sans-serif;
        font-size: 14px;
        overflow-x: hidden;
    }
    

`;
