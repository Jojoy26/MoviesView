import styled from "styled-components";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"

type PropsButton = {
    visible: boolean
}

export const Button = styled.button<PropsButton>`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 33px;
    min-width: 120px;

    background: rgba(255, 255, 255, 0.025);
    color: #fff;

    border: none;
    outline: none;
    border-radius: 5px;
    
    font-size: 16px;
    visibility: ${(props) => props.visible ? "visible" : "hidden"};

    cursor: pointer;
    

    &:hover{
        background: rgba(255, 255, 255, 0.1);
    }
`

export const ArrowLeft = styled(FiArrowLeft)`
    width: 20px;
    height: 25px;
    margin-right: 3px;
`

export const ArrowRight = styled(FiArrowRight)`
    width: 20px;
    height: 25px;
    margin-left: 3px;
`

