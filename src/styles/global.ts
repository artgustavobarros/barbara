import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto;
  }

  *, body{
    letter-spacing: 2px;
  }

  a, button {
    cursor: pointer;
    outline: none;
    text-decoration: none;
    font-family: Roboto;
  }
`

export default GlobalStyles