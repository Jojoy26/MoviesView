import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"

type PropsContainer = {
    img: string;
}

export const Container = styled.div<PropsContainer>`
    height: 240px;

    border-radius: 10px;

    background: black;
    background-image: url(${(props) => props.img});
    background-position: center;
    background-size: cover;

    cursor: pointer;
    color: #fff;
    overflow: hidden;
    
`

type Props = {
    noImage: boolean
}
export const HeartIcon = styled(AiOutlineHeart)`
    height: 25px;
    width: 25px;
    transition: ease-in .3s;
    align-self: flex-end;

    &:hover{
        color: red
    }
`

export const FillHeartIcon = styled(AiFillHeart)`
    height: 25px;
    width: 25px;
    transition: ease-in .3s;
    align-self: flex-end;

    color: red;

`

export const MovieHover = styled.div<Props>`
    opacity: ${props => props.noImage ? 1 : 0};
    box-sizing: border-box;
    border-radius: 10px;
    overflow: hidden;

    height: 100%;
    width: 100%;

    background:rgba(11, 16, 20, .9);
    transition: .3s;

    z-index: 100;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 8px;

    ${HeartIcon}{
        opacity:${(props) => props.noImage ? "0" : "1"};
    }

    border: ${(props) => props.noImage ? "1px solid #777" : "0"};

    &:hover {
        opacity: 1;
        border: ${(props) => props.noImage ? "1px solid #fff" : "0"};
        ${HeartIcon}{
            opacity: 1;
        }
    }

    

    
    

`



export const Column = styled.div`
    display: flex;
    flex-direction: column;
    
    & span {
        font-size: 18px;
        font-weight: bold;
    }

    & p {
        margin: 0;
        color: #bbb
    }
`