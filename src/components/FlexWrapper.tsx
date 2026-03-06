import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: string;
    justify?: string;
    align?: string;
    wrap?: string;
    position?: string;
    gap?: string;
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    height: 100%;
    gap: ${props => props.gap || null};
    position: ${props => props.position || null};
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "stretch"};
    flex-wrap: ${ props => props.wrap || "nowrap"};
`