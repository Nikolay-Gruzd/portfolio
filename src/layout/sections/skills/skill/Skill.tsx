import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {theme} from "../../../../styles/Theme.ts";

type SkillPropsType = {
    iconId: string
    title: string
    width?: string
    height?: string
    viewBox?: string

}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox}/>
            <SkillTitle>{props.title}</SkillTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    position: relative;
    
    width: 120px;
    height: 165px;
    
    @media ${theme.media.tablet} {
        width: 95px;
        height: 145px;
    }
`

const SkillTitle = styled.p`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 13%;
    text-transform: uppercase;
    text-align: center;
    white-space: nowrap; //Игнорирует размер блока и не переносит слова после пробела на след строку

    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    @media ${theme.media.tablet} {
        white-space: wrap;
        font-size: 12px;
        bottom: 20px;
    }
`