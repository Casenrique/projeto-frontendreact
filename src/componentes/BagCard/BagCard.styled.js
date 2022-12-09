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
  position: relative;
  margin:16px;
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
flex-grow: 2;
flex-direction:column;
padding: 0px 10px;
`

export const ProductName = styled.span`
    display:flex;
    color:#FFFFFF;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 0em;
    padding-top: 8px;
    text-align: center;
    background-color: none;
`
export const ProductMovie = styled.span`
    display:flex;
    color:#8A8A8A;       
    padding-top: 8px;
    text-align: center;
    background-color: transparent;   
    font-family: "Inter";
    font-size: 24px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
`


export const ProductPrice = styled.span`
    font-weight: 500;
    font-size: 24px;
    line-height: 25px;
    color:#DA00FE;
    padding-top: 8px;
    background-color: transparent;

`
export const ProductQuantity = styled.span`
    font-weight: 700;
    font-size: 16px;
    line-height: 25px;
    color:#A100ED;
    background-color: transparent;
    justify-content:center;
    align-items: center;

`

export const ButtonsSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 8px;

`
export const AddSubtractButton = styled.button`
    background-color: #242424;
    border-radius: 5px;
    background-color: transparent;
    width: 50px;
    height: 25px;
    margin: 8px;
`

export const RemoveButton = styled.button`
    background-color: #DA00FE;
;
    border-radius: 5px;
    /* background-color: transparent; */
    width: 100px;
    height: 25px;
    margin-top: 8px;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
`



  