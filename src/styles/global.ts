import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto;
  }

  *, body{
    letter-spacing: 1.5px;
  }

  body{
    font-size: 1.6rem;
  }


  a, button {
    cursor: pointer;
    outline: none;
    text-decoration: none;
    font-family: Roboto;
  }
`

export default GlobalStyles