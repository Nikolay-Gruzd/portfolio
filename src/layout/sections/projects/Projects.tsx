import styled from "styled-components";
import projectImage from "../../../assets/images/project.webp";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Project} from "./project/Project.tsx";
import {Container} from "../../../components/Container.ts";
import {TabMenu} from "./tabMenu/TabMenu.tsx";

const projectsItems = ["All", "Lending page", "React", "spa"]
const technologiesItems = ["Javascript", "React", "PostgreSQL", "Redux"];

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <TabMenu menuItems={projectsItems}/>
                <FlexWrapper justify={"space-between"} wrap={"wrap"}>
                    <Project technologies={technologiesItems}
                             title={"Project 1"}
                             src={projectImage}
                             text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. " +
                                 "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt " +
                                 "nostrud amet."}
                    />
                    <Project technologies={technologiesItems} title={"Project 2"} src={projectImage} text={"text 2"}/>
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section``