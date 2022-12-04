import { createGlobalStyle } from "styled-components"
export const GlobalStyled = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand";
  
  background: linear-gradient(96.97deg, #000000 2.78%, rgba(34, 34, 34, 0.66) 152.37%);
  color:#cccccc;
  background-color: #242424;


  html {
    font-style: sans-serif;
  }

  #root {
    padding: 16px;
  }

}
`