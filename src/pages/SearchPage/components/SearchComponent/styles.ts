import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

type PropsSearchIcon = {
    $focus: boolean
}

export const Row = styled.div`
    display: flex;
    align-items: center;

    box-sizing: border-box;

    width: 100%;
    height: 32px;
    margin-top: 116px;
    padding: 0 10px;
    
    border-radius: 3px;

    background: #fff;

    input {
        width: 100%;
        height: 32px;
        border: none;
        outline: none;
        padding: 0 10px;;
    }

    button {
        height: 22px;

        border: none;
        outline: none;

        cursor: pointer;

        font-size: 12px;
        border-radius: 4px;
    }
`


export const SearchIcon = styled(FaSearch)<PropsSearchIcon>`
    height: 12px;
    width: 12px;

    transition: .3s;

    color: ${(props) => props.$focus ? "#F87D02" : "#333"};
`