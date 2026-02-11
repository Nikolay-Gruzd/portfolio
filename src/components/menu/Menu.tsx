import styled from "styled-components";
import {Logo} from "../logo/Logo.tsx";

export const Menu = () => {
    return (
        <StyledMenu>
                <ul>
                    <li>
                        <Logo/>
                    </li>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Projects</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    width: 100%;
    
    ul {
        gap: 30px;
        display: flex;
        align-items: center;
    }

    li:nth-child(2) {
        margin-right: auto;        
    }

`