import {theme} from "./Theme.ts";

type FontPropsType = {
    family?: string;
    weight?: number;
    color?: string;
    lineHeight?: string;
    spacing?: number;
    Fmin?: number;
    Fmax?: number;
}

export const font = (props : FontPropsType) => `
    font-family: ${props.family || "Montserrat"};
    font-weight: ${props.weight || 400};
    color: ${props.color || theme.colors.font};
    line-height: ${props.lineHeight || 1.2};
    letter-spacing: ${props.spacing || 0};
    
    font-size: calc((100vw - 415px) / (1440 - 415) * (${props.Fmax} - ${props.Fmin}) + ${props.Fmin}px);
`