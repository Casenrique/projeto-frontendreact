import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction:row;
  padding: 16px;
  max-height: 288px;
  background-color: #323232;
  border-radius: 12px;
  justify-content: space-between;
  align-items: center;
  color: #cccccc;
  border: 1px solid black;
`

export const ProductPhoto = styled.img`
    max-width: 274.11px;
    height: 184.57px;
    background: #323232;
    border-radius: 4px;
    overflow: hidden;
`

export const ProductData = styled.div`
align-self: flex-start;
display:flex;
flex-direction:column;
`

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


export const ProductPrice = styled.span`
    font-weight: 500;
    font-size: 16.5px;
    line-height: 25px;
    color:#DA00FE;
    padding-top: 8px;
    background-color: transparent;

`
export const ProductQuantity = styled.span`
    font-weight: 500;
    font-size: 32.5px;
    line-height: 25px;
    color:#A100ED;
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




  