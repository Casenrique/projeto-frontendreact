import styled from "styled-components";

export const SearchBarContainer = styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    /* padding: 12px 75px; */
    gap: 16px;
    color:#cccccc;
    background: none;
    /* background-image: url("./imgs/background-stars.jpg");
    background-size: cover; */
`
export const Input = styled.input`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    /* padding: 1.20333px 438.214px 12.0333px 12.0333px; */
    gap: 10.03px;
    width: 200px;
    height: 36px;
    background: none;
    background-color: #5F5F5F;
    border: 1px solid #454D4A;
    border-radius: 5px;
    font-family: "Quicksand";
    font-weight: 700;
    font-size: 18px;
    /* color:#DBDADA; */
`

export const Select = styled.select`
    display: flex;
    /* color:#cccccc; */
    background-color: #5F5F5F;
    border: 1px solid #454D4A;
    background: none;
    gap: 10.03px;
    height: 36px;
    border-radius: 5px;
    font-family: "Quicksand";
    font-weight: 700;
    font-size: 16px;
    /* color:#DBDADA; */
`