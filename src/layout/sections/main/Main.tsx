import styled from "styled-components";
import photo from "../../../assets/images/photoBright.svg";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Main = () => {
    return (
        <div>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <h1>React developer</h1>
                    <h2>Nikolay Gruzd</h2>
                    <span>
                        "Learning to program has no more to do with designing interactive software than
                        learning to touch type has to do with writing poetry" - Ted Nelson
                    </span> <br/>
                    <button>Contact Me</button>
                </div>
                <Photo src={photo} alt="Photo"/>
            </FlexWrapper>
        </div>
    );
};

const Photo = styled.img`
    width: 570px;
    height: 430px;
    object-fit: cover;
`