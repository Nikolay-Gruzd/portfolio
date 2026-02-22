import styled from "styled-components";
import {Menu} from "../../components/menu/Menu.tsx";
import {Container} from "../../components/Container.ts";

const headerItems = ["<Logo/>", "Home", "Projects", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Menu menuItems={headerItems}/>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #ffa2a2;
    display: flex;
    align-items: center;
`