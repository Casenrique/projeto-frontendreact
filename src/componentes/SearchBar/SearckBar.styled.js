import styled from "styled-components";

export const SearchBarContainer = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1px 75px;
    gap: 16px;
    color:#cccccc;
    background: none;

    /* border: 1px solid black; */
`
export const Input = styled.input`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    /* padding: 1.20333px 438.214px 12.0333px 12.0333px; */
    gap: 10.03px;
    width: 200px;
    height: 24px;
    background: none;
    background-color: #5F5F5F;
    border: 1px solid #454D4A;
    border-radius: 5px;
    font-family: "Quicksand";
    font-weight: 700;
    font-size: 12px;
    color:#DBDADA;
`

export const Select = styled.select`
    display: flex;
    color:#cccccc;
    background-color: #5F5F5F;
    background: none;
    gap: 10.03px;
    height: 24px;
    border: 0.987223px solid #454D4A;
    border-radius: 4.93611px;
`