import styled from "styled-components";
import photo from "../../../assets/images/photoBright.svg";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";
import {Button} from "../../../components/Button.tsx";
import {font} from "../../../styles/Common.ts";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <MainWrapper>
                        <TextBlock>
                            <MainTitle>React developer</MainTitle>
                            <Name>Nikolay Gruzd</Name>
                            <Text>
                                "Learning to program has no more to do with designing interactive software than
                                learning to touch type has to do with writing poetry" - Ted Nelson
                            </Text>
                            <Button>Contact Me</Button>
                        </TextBlock>
                        <Photo src={photo} alt="Photo"/>
                        <Link href="#">
                            <Icon iconId={"arrowScroll"}/>
                        </Link>
                    </MainWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    display: flex;
    align-items: center;
    min-height: 100vh;    
    
    @media ${theme.media.tablet} {
        min-height: auto;
    }
    
    @media ${theme.media.bigTablet} {
        min-height: auto;
    }
`

const MainWrapper = styled.div`
    position: relative;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    @media ${theme.media.tablet} {
        justify-content: center;
        flex-wrap: wrap-reverse;
    }
    
    @media ${theme.media.bigTablet} {
        justify-content: center;
    }
    
`

const MainTitle = styled.h1`
    ${font( {family: "Tinos, sans-serif", Fmax: 20, Fmin: 16, lineHeight: "23px",} )}
    text-transform: uppercase;
`

const Name = styled.h2`
    ${font( {color: theme.colors.accent, Fmax: 50, Fmin: 35, weight: 600} )}    
`

const TextBlock = styled.div`
    gap: 25px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: left;
    width: 100%;
    max-width: 520px;
    max-height: 278px;

    @media ${theme.media.tablet} {
        margin-top: 60px;
        gap: 10px;
        align-items: center;
        text-align: center;
    }
    
    @media ${theme.media.bigTablet} {
        gap: 15px;
    }
    
`

const Text = styled.p`
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 4%;    
`

const Link = styled.a`
    text-align: center;
    position: absolute;
    bottom: -65px; /* Отступ от низа */
    left: 50%; /* Сдвиг начала элемента к центру */
    transform: translateX(-50%); /* Сдвиг элемента на 50% его собственной ширины влево для идеального центра */
    
    @media ${theme.media.bigTablet} {
        display: none;
    }
`

const Photo = styled.img`
    width: 100%;
    max-width: 570px;
    object-fit: cover;

    @media ${theme.media.tablet} {
        max-width: 470px;
    }
`