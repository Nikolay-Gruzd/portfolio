import styled from "styled-components";
import projectImage from "../../../assets/images/project.webp";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Project} from "./project/Project.tsx";
import {Container} from "../../../components/Container.ts";
import {TabMenu} from "./tabMenu/TabMenu.tsx";
import {Button} from "../../../components/Button.tsx";
import {theme} from "../../../styles/Theme.ts";

const projectsItems = ["All", "Lending page", "React", "spa"]
const technologiesItems = ["Javascript", "React", "PostgreSQL", "Redux"];

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <TabMenu menuItems={projectsItems}/>
                <FlexWrapper justify={"space-evenly"} wrap={"wrap"} gap={"10px"}>
                    <Project technologies={technologiesItems}
                             title={"Project 1"}
                             src={projectImage}
                             text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. " +
                                 "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt " +
                                 "nostrud amet."}
                    />
                    <Project technologies={technologiesItems} title={"Project 2"} src={projectImage} text={"text 2"}/>
                    <ButtonBox>
                        <Button width={"305px"}>SEE ALL PROJECTS</Button>
                    </ButtonBox>
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section``

const ButtonBox = styled.div`
    display: none;
    margin: 30px 40px 0 40px;

    @media ${theme.media.tablet} {
        display: unset;
    }
`