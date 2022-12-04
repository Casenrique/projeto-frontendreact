import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  padding: 16px;
  width: 100%;
  min-height: 288px;
  background-color: #323232;
  /* background: none; */
  border-radius: 12px;
  flex-direction:column;
  /* justify-content: center;
  align-items: center; */
  color: #cccccc;
  border: 1px solid black;
`

export const ProductPhoto = styled.img`
    max-width: 274.11px;
    height: 184.57px;
    background: #323232;
    /* border: 1px solid #a100ec; */
    border-radius: 4px;
    overflow: hidden;
`

// export const ProductData = styled.div`
//     display:flex;
//     justify-content:space-between;
//     align-items:flex-end;
//     border: 1px solid #03c68b;

// `

export const ProductName = styled.span`
    display:flex;
    color:#FFFFFF;
    /* width: 214.11px; */
    /* font-family: "Poppins"; */
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0em;
    /* line-height: 22px; */
    padding-top: 8px;
    text-align: center;
    background-color: none;
    /* margin-bottom: 10px; */
`
export const ProductMovie = styled.span`
    display:flex;
    color:#8A8A8A;       
    padding-top: 8px;
    text-align: center;
    background-color: transparent;   
    font-family: "Inter";
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
`

// export const ProductPurchase = styled.div`
//     display:flex;
//     flex-direction:column;
//     width: 60px;
//     border: 1px solid #3599f5;
// `

export const ProductPrice = styled.span`
    /* font-family: "Poppins"; */
    font-weight: 500;
    font-size: 16.5px;
    line-height: 25px;
    color:#DA00FE;
    padding-top: 8px;
    background-color: transparent;

`

export const AddToBagButton = styled.button`
    align-items:center;
    justify-content:center;
    width: 83px;
    height: 24px;
    padding-top: 8px;
    background-color: transparent;
    border: none;
    border-radius: 5px;

    :hover {
        cursor: pointer;
        filter:brightness(1.1)
    }

    :active {
        filter: brightness(0.85)
    }
    
`




  