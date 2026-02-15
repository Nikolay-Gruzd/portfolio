import styled from "styled-components";
import {Logo} from "../logo/Logo.tsx";

type MenuPropsType = {
    menuItems: Array<string>
}

export const Menu = (props: MenuPropsType) => {
    return (
        <StyledMenu menuItems={props.menuItems}>
                <ul>
                    { props.menuItems.map((item, index) => {
                        if ( item === "<Logo/>") {
                            return <li key={index}><a href=""><Logo/></a></li>
                        } else return <li key={index}><a href="">{item}</a></li>
                    }) }
                </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav<MenuPropsType>`
    width: 100%;
    
    ul {
        gap: 30px;
        display: flex;
        align-items: center;
    }

    li:nth-child(2) {
        margin-right: ${props => props.menuItems && props.menuItems.includes("<Logo/>") ? "auto" : "0"};        
    }

`