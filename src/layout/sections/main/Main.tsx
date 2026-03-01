import styled from "styled-components";
import photo from "../../../assets/images/photoBright.svg";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";
import {Button} from "../../../components/Button.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper position={"relative"} direction={"column"}>
                    <FlexWrapper  align={"center"} justify={"space-between"}>
                        <TextBlock>
                            <MainTitle>React developer</MainTitle>
                            <Name>Nikolay Gruzd</Name>
                            <Text>
                                "Learning to program has no more to do with designing interactive software than
                                learning to touch type has to do with writing poetry" - Ted Nelson
                            </Text>
                            <Button href={"#"}>Contact Me</Button>
                        </TextBlock>
                        <Photo src={photo} alt="Photo"/>
                    </FlexWrapper>
                    <Link href="#">
                        <Icon iconId={"arrowScroll"}/>
                    </Link>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    display: flex;
    min-height: 100vh;
`

const MainTitle = styled.h1`
    font-family: Tinos, sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0;
`

const Name = styled.h2`
    color: ${theme.colors.accent};
    font-size: 50px;
    font-weight: 600;
    letter-spacing: 0;
`

const TextBlock = styled.div`
    gap: 25px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: left;
    width: 520px;
    height: 278px;
`

const Text = styled.p`
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 4%;
`

const Link = styled.a`
    text-align: center;
    position: absolute;
    bottom: 0;                      /* Отступ от низа */
    left: 50%;                      /* Сдвиг начала элемента к центру */
    transform: translateX(-50%);    /* Сдвиг элемента на 50% его собственной ширины влево для идеального центра */
`

const Photo = styled.img`
    width: 570px;
    height: 430px;
    object-fit: cover;
`