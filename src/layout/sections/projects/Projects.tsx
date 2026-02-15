import styled from "styled-components";
import projectImage from "../../../assets/images/project.webp";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Menu} from "../../../components/menu/Menu.tsx";
import {Project} from "./project/Project.tsx";

const projectsItems = ["All", "Lending page", "React", "spa"]
const technologiesItems = ["Javascript", "React", "PostgreSQL", "Redux"];

export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>Projects</SectionTitle>
            <Menu menuItems={projectsItems} />
            <FlexWrapper>
                <Project technologies={technologiesItems} title={"Project 1"} src={projectImage} text={"text 1"}/>
                <Project technologies={technologiesItems} title={"Project 2"} src={projectImage} text={"text 2"}/>
            </FlexWrapper>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    min-height: 100vh;
    background-color: #cc8c59;
`