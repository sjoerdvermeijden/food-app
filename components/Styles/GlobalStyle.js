import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --lightgray: #f5f5f5;
        --gray: #dadada;    
        --darkgray: #333333;    
    }
  
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1.4;
    }

    body {

    }

    button {
        border-width: 0;
        padding: 10px;
        background: var(--darkgray);
        border-radius: 5px;
        color: white;

        &:hover,
        &:focus {
            cursor: pointer;
        }

    }

`;
