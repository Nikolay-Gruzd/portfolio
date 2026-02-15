import styled from "styled-components";
import {Menu} from "../../components/menu/Menu.tsx";

const headerItems = ["<Logo/>", "Home", "Projects", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Menu menuItems={headerItems}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #ffa2a2;
    display: flex;
    align-items: center;
`