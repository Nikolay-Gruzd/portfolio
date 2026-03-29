import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

type MenuPropsType = {
    menuItems: Array<string>
}

export const HeaderMenu = (props: MenuPropsType) => {
    return (
        <StyledHeaderMenu menuItems={props.menuItems}>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav<MenuPropsType>`
    width: 100%;

    ul {
        gap: 10px;
        display: flex;
        align-items: center;
    }

    li:first-child {        
        margin-right: auto;
    }
    
    li:last-child a{
        display: block;
        margin-left: 85px;
        padding: 13px 20px;
        border-radius: 6px;
        background-color: ${theme.colors.accent};
        color: ${theme.colors.primaryBG};
    }
    
    @media ${theme.media.tablet} {
        ul {
            gap: 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        li:first-child {
            margin-right: 0;
        }

        li:last-child a {
            margin-left: 0;
        }
    }
    
    @media ${theme.media.mobile} {

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
    text-align: center;
`