import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <Container>
                <SectionTitle>About me</SectionTitle>
                <TextBlockContainer>
                    <VerticalLine/>
                    <TextBlock>
                        The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a
                        sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a
                        chamber
                        built from sarsen megaliths on its eastern end. Both inhumed and cremated human remains were placed
                        within this chamber during the Neolithic period, representing at least nine or ten individuals.
                    </TextBlock>
                </TextBlockContainer>
            </Container>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    min-height: 30vh;
`

const TextBlock = styled.div`
    max-width: 843px;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 4%;
    padding-left: 17px; 
`

const TextBlockContainer = styled.div`
    position: relative;
`

const VerticalLine = styled.span`
    content: "";
    position: absolute;
    left: 0; // прижимаем к левому краю 
    top: 5px; // отступ сверху (немного отступа от начала текста) 
    bottom: 5px; // отступ снизу (немного не доходит до конца)
    max-height: 116px; //Максимальный размер линии
    width: 5px; // толщина линии 
    background-color: ${theme.colors.accent}; // цвет линии 
    border-radius: 2px; // скругление для красоты 
`