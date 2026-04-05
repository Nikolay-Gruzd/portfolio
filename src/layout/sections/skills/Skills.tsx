import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";

const skillData = [
    {iconId: "javascript", title: "javascript"},
    {iconId: "typescript", title: "typescript"},
    {iconId: "mongodb", title: "mongo db"},
    {iconId: "postgresql", title: "postgresql"},
    {iconId: "jest", title: "jest"},
    {iconId: "express", title: "express js"},
    {iconId: "nestjs", title: "nest js"},
    {iconId: "docker", title: "docker"},
    {iconId: "react", title: "react js"},
    {iconId: "reactNative", title: "react native"},
    {iconId: "styledComponents", title: "styled components"},
    {iconId: "redux", title: "redux"},
    {iconId: "git", title: "git"},
]

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <BlockWrapper>
                    { skillData.map((skill) => (
                        <Skill iconId={skill.iconId}
                               title={skill.title}
                               width={"120px"}
                               height={"120px"}
                               viewBox={"0 0 120 120"}
                        />
                    )) }
                </BlockWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section``

const BlockWrapper = styled.div`
    display: flex;
    height: 100%;
    gap: 30px 115px;
    justify-content: center;
    flex-wrap: wrap;  
    
    @media ${theme.media.tablet} {
        gap: 30px 45px;
    }
`