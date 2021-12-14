import React from "react";
import * as C from "./styles";

type Props = {
    title: string;
    func: () => void;
    visible: boolean
}

const Button = ({title, visible, func}: Props) => {


    return (
        <C.Button visible={visible} onClick={func}>{title === "Next" ? 
        <> {title} <C.ArrowRight/> </>
        : <><C.ArrowLeft/> {title} </>}</C.Button>
    );
}

export default Button;