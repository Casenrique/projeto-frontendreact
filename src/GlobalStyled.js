import { createGlobalStyle } from "styled-components"


export const GlobalStyled = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand";

  /* background: linear-gradient(96.97deg, #000000 2.78%, rgba(34, 34, 34, 0.66) 152.37%);
  background-color: #242424; */
  color:#cccccc;


  html {
    font-style: sans-serif;
  }

  #root {
    padding: 16px;
  }

  body {
    /* background-image: url("./imgs/background-stars.jpg");
    background-size: contain; */
    background: linear-gradient(96.97deg, #000000 2.78%, rgba(34, 34, 34, 0.66) 152.37%);
    background-color: #242424;
  }

  button {
    :hover {
          cursor: pointer;
          filter:brightness(1.1)
      }
      :active {
          filter: brightness(0.85)
    
      }
  }

}
`