import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {theme} from "../../styles/Theme.ts";
import {Container} from "../../components/Container.ts";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction="column" align="center" gap={"50px"}>
                    <SocialList>
                        <SocialItem>
                            <SocialLink href="#">
                                <Icon iconId={"gmail"} width={"38px"} height={"38px"} viewBox={"0 0 39 39"}/>
                                <SocialText>Gmail</SocialText>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink href="#">
                                <Icon iconId={"telegram"} width={"38px"} height={"38px"} viewBox={"0 0 39 39"}/>
                                <SocialText>Telegram</SocialText>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink href="#">
                                <Icon iconId={"github"} width={"38px"} height={"38px"} viewBox={"0 0 39 39"}/>
                                <SocialText>Github</SocialText>
                            </SocialLink>
                        </SocialItem>
                    </SocialList>
                    <BoxSocial>
                        <SocialLink href="#">Projects</SocialLink>
                        <SocialLink href="#">Contact</SocialLink>
                    </BoxSocial>
                    <CopyRight>© 2026 Nikolay Gruzd, All Rights Reserved.</CopyRight>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.div`
    background-color: ${theme.colors.primaryBG};
    padding: 50px 0 100px;

    p, small {
        text-transform: uppercase;
    }
`

const BoxSocial = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 20px;
`

const SocialList = styled.ul`
    display: flex;
    gap: 100px;
`

const SocialItem = styled.li`
    position: relative;
`

const SocialLink = styled.a`
    color: inherit;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0;
    
    svg {
        color: ${theme.colors.accent};
        width: 38px;
        height: 38px;
    }
    
    &:hover svg{
        color: ${theme.colors.hoverAccent}
    }
`

const SocialText = styled.p`
    position: absolute;
    
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 12%;

`

const CopyRight = styled.small`
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0;
`