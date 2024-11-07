import { Link } from "react-router-dom"
import styled from "@emotion/styled";

export const Button = styled(Link)`
    position: relative;
    display: block;
    height: 54px;
    padding: 18px 27px;
    font-size: 14px;
    text-decoration: none;
    color: #202020;
    border: 1px solid #000000;
    background: transparent;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 600;
    transition: all 400ms ease-out;
    &:hover{
        background: #202020;
        color: #fff;
    }
}
`
