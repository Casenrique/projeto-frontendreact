import styled from "styled-components";

export const SpaceshipsCardContainer = styled.main`
  
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
    
    column-gap: 32px;
    margin: 16px;

    flex-grow: 2;

    h1 {
        
        margin-top: 32px;
    } 

    hr {
        
        margin: 16px 0px;
    }
    
  
`;

export const BagContainer = styled.section`
display:flex;
flex-direction:column;
flex-grow: 1;
border: 1px solid #cccccc;
`

export const BagSummaryTitle = styled.span`
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:700;
  font-size:32px;
`

