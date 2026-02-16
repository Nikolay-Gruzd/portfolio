import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction="column" align="center">
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={"gmail"}/>
                            <SocialText>Gmail</SocialText>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={"telegram"}/>
                            <SocialText>Telegram</SocialText>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={"github"}/>
                            <SocialText>Github</SocialText>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <FlexWrapper justify={"space-between"}>
                    <SocialLink>Projects</SocialLink>
                    <SocialLink>Contact</SocialLink>
                </FlexWrapper>
                <CopyRight>© 2026 Nikolay Gruzd, All Rights Reserved.</CopyRight>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.div`
    background-color: #3c92cc;
    min-height: 30vh;
`

const SocialList = styled.ul`
    display: flex;
    gap: 30px;
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`
    gap: 30px;
`

const SocialText = styled.p`
    
`

const CopyRight = styled.small`

`