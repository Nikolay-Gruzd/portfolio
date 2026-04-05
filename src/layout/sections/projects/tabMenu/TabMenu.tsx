import styled from "styled-components";
import {theme} from "../../../../styles/Theme.ts";

type MenuPropsType = {
    menuItems: Array<string>
}

export const TabMenu = (props: MenuPropsType) => {
    return (
        <StyledTabMenu menuItems={props.menuItems}>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav<MenuPropsType>`
    width: 100%;

    ul {
        gap: 20px;
        display: flex;
        align-items: center;
    }       
`

const ListItem = styled.li`

`

const Link = styled.a`
    color: inherit;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0;
    text-transform: uppercase;
    white-space: nowrap;
    
    &:hover{
        color: ${theme.colors.accent}        
    }
`