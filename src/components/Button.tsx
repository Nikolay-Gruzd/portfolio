import styled from "styled-components";
import {theme} from "../styles/Theme.ts";

type propsType = {
    width?: string
}

export const Button = styled.button<propsType>`
    display: block;
    width: ${props => (props.width ? props.width : "fit-content")};
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0;
    text-align: center;
    padding: 13px 20px;
    border-radius: 6px;
    background-color: ${theme.colors.accent};
    color: ${theme.colors.primaryBG};
`