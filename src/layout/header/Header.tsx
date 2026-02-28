import styled from "styled-components";
import {Container} from "../../components/Container.ts";
import {theme} from "../../styles/Theme.ts";
import {HeaderMenu} from "./headerMenu/HeaderMenu.tsx";

const headerItems = ["Home", "Projects", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <HeaderMenu menuItems={headerItems}/>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: ${theme.colors.primaryBG};
    padding: 28px 0;
`