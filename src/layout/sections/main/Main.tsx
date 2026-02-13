import styled from "styled-components";
import photo from "../../../assets/images/photoBright.svg";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <TextBlock>
                    <h1>React developer</h1>
                    <h2>Nikolay Gruzd</h2>
                    <span>
                        "Learning to program has no more to do with designing interactive software than
                        learning to touch type has to do with writing poetry" - Ted Nelson
                    </span> <br/>
                    <button>Contact Me</button>
                </TextBlock>
                <Photo src={photo} alt="Photo"/>
            </FlexWrapper>
            <Icon iconId={"arrowScroll"}/>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    background-color: #ccae89;
    min-height: 100vh;
`

const TextBlock = styled.div`

`

const Photo = styled.img`
    width: 570px;
    height: 430px;
    object-fit: cover;
`