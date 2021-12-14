import styled from "styled-components";

export const Row = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`

export const PageCount = styled.div`

    color: #22323f;

    display: flex;
    flex-direction: column;
    
    align-items: center;

    transition: .3s;

    font-size: 14px;;
    
    &:hover {
        color: #ddd;
    }
`