import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px;
    gap: 16px;    
    background-color: transparent;
    
`

export const LogoContainer = styled.div`
    display: flex;
    gap:5px;
    background-color: transparent;
    border: none;

`

export const IconsContainer = styled.div`
    display: flex;
    gap:32px;
    background-color: transparent;

`


export const Button =styled.button`
    background-color: #242424;
    border-radius: 5px;
    background-color: transparent;
    display: flex;
    
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
    background-color: transparent;
`

export const ShopLogo = styled.img`
    height: 60px; 
    width: 100px;
    background: none;
    background-color: transparent;
    border: none;

`

export const Input = styled.input`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
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
    margin-bottom: 16px;
`

export const Badge = styled.span`
    background-color: #FFFFFF;
    height: 15px;
    width: 15px;
    border-radius: 50px;
    color:#A100ED;
    font-weight: 700;
    z-index: 1;
`

export const HeaderList = styled.ul`
    text-decoration: none;
    display: flex;


`
export const ItemList = styled.li`
    display: flex;
    font-size: 24px;
    font-weight: 700;
 
    text-decoration: none;
    margin: 0px 32px;
`