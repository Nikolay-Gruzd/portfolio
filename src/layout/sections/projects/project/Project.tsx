import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";

type ProjectPropsType = {
    title: string;
    text: string;
    src: string;
    technologies: Array<string>;
}

export const Project = (props: ProjectPropsType) => {
    return (
        <Link href={"#"}>
            <StyledProject>
                <Image src={props.src} alt="Project image"/>
                <Title>{props.title}</Title>
                <FlexWrapper>
                    { props.technologies.map((item, index) => (
                        <Technology key={index}>{item}</Technology>
                    )) }
                </FlexWrapper>
                <Text>
                    {props.text}
                </Text>
            </StyledProject>
        </Link>
    );
};

const StyledProject = styled.div`
    background-color: #594b41;
    max-width: 522px;
    width: 100%;
`

const Image = styled.img`
    width: 100%; 
    height: 388px;
    object-fit: cover;
`

const Text = styled.p`

`

const Title = styled.h3`

`

const Link = styled.a`

`

const Technology = styled.p`

`

