import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {theme} from "../../../../styles/Theme.ts";
import {Button} from "../../../../components/Button.tsx";

type ProjectPropsType = {
    title: string;
    text: string;
    src: string;
    technologies: Array<string>;
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <ImageWrapper>
                <Image src={props.src} alt="Project image"/>
                <Button>View Project</Button>
            </ImageWrapper>
            <TextBlock>
                <Title>{props.title}</Title>
                <FlexWrapper wrap={"wrap"} gap={"12px"}>
                    {props.technologies.map((item, index) => (
                        <Technology key={index}>{item}</Technology>
                    ))}
                </FlexWrapper>
                <Text>
                    {props.text}
                </Text>
            </TextBlock>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    background-color: #F5F2FD;
    border-radius: 6px;
    overflow: hidden;
    max-width: 522px;
    width: 100%;
    margin-top: 30px;
    box-shadow: 2px 2px 32px 0 rgba(40, 38, 44, 0.15);  
    
    @media ${theme.media.bigTablet} {
        max-width: 440px;
    }

    @media ${theme.media.tablet} {
        max-width: 522px;
    }
`

const TextBlock = styled.div`
    padding: 25px;
`

const ImageWrapper = styled.div`
    position: relative;

    &:hover {
        &::before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: rgba(103, 103, 103, 0.3);
            backdrop-filter: blur(4px);
        }

        ${Button} {
            opacity: 1;
        }
    }
    
    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`

const Image = styled.img`
    width: 100%;
    max-width: 522px;
    object-fit: cover;
`

const Text = styled.p`
    margin-top: 20px;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 4%;
`

const Title = styled.h3`
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0;
    margin-bottom: 12px;
`

const Technology = styled.p`
    border-radius: 4px;
    color: #DBFFFF;
    background-color: ${theme.colors.accent};
    padding: 8px 16px 8px 16px;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 12%;
    text-transform: uppercase;
`

