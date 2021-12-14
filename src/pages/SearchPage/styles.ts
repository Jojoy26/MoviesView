import styled from "styled-components";
import { BiErrorAlt } from "react-icons/bi"


export const Container = styled.div`
    max-width: 892px;
    height: 100vh;
    margin: auto;
    overflow: auto;

`

export const Grid = styled.div`
    margin-top: 20px;

    display: grid;
    grid-template-columns: repeat(auto-fill, 169px);
    justify-content: center;
    gap: 10px;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    margin-top: 50px;;
`

export const ErrorText = styled.p`
    font-size: 25px;
    color: #fff;
    max-width: 70%;
    margin: 0;
    margin-top: 10px;
`

export const IconError = styled(BiErrorAlt)`
    color: yellow;
    height: 40px;
    width: 40px;
`



