import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 1px 75px;
    gap: 16px;
    /* border: 1px solid black; */
`

export const Button =styled.button`
    /* background-color: #D9D9D9; */
    border-radius: 5px;
    
    :hover {
        cursor: pointer;
        filter:brightness(1.1)
    }

    :active {
        filter: brightness(0.85)
    }
`

export const Image =styled.img`
    height: 36px;
    width: 36px;
    background: none;
`

export const ShopLogo = styled.img`
    height: 60px; 
    width: 100px;
    background: none;
`

export const Input = styled.input`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    /* padding: 12.0333px 438.214px 12.0333px 12.0333px; */
    gap: 10.03px;
    width: 200px;
    height: 24px;
    background: none;
    background-color: #5F5F5F;
    border: 1px solid #454D4A;
    border-radius: 5px;
    font-family: "Quicksand";
    font-weight: 700;
    font-size: 16px;
    color:#DBDADA;
`