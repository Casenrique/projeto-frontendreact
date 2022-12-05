import styled from "styled-components";

export const SpaceshipsCardContainer = styled.main`
  /* background-color: #242424; */
  /* display:grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr; */

  display:flex;
  flex-direction: column;

  
  h1 {
      width: 100%;
      margin-top: 32px;
  }

  hr {
    width: 100%;
    margin: 16px 0px;

  }
`
export const ContentContainer = styled.div`
  display:grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
`

export const CardsContainer = styled.section`
    /* display: flex; */
    /* flex-wrap: wrap; */
    flex-grow: 2;

    h1 {
        /* width: 100%; */
        margin-top: 32px;
    } 

    hr {
        /* width: 100%; */
        margin: 16px 0px;
    }
    
  
`;

export const BagContainer = styled.section`
display:flex;
flex-grow: 1;
background-color: white;

`

