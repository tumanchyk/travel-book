import React from "react";
import { TitleEl } from "./Title.styled";

type TitleProps = {
    name: string;
}

const Title: React.FC<TitleProps> = ({name}) => {
    return <TitleEl>{name}</TitleEl>
}
export default Title;