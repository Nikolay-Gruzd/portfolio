import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>Skills</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"center"}>
                <Skill iconId={"javascript"} title={"javascript"} viewBox={"0 0 115 115"}/>
                <Skill iconId={"git"} title={"git"} viewBox={"0 0 256 256"}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: #bfa1cc;
    min-height: 100vh;
`