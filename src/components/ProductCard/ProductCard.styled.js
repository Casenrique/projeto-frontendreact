import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  min-width: 220px;
  max-width: 300px;
  min-height: 260px;
  background-image: url("./imgs/background-stars.jpg");
  background-size: cover;
  /* background-color: #323232; */
  /* background: linear-gradient(96.97deg, #000000 2.78%, rgba(34, 34, 34, 0.66) 152.37%); */
  border-radius: 12px;
  transition: all 1.5s;
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

export const ProductName = styled.span`
    display:flex;
    color:#FFFFFF;
    font-size: 16px;
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
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
`

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
    width: 115px;
    height: 30px;
    padding-top: 8px;
    background-color: transparent;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    :hover {
        cursor: pointer;
        filter:brightness(1.1)
    }

    :active {
        filter: brightness(0.85)
    }
    
`




  