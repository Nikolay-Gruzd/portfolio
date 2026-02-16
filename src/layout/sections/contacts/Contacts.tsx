import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contacts</SectionTitle>
            <StyledForm>
                <StyledField placeholder="Name"/>
                <StyledField placeholder="Email"/>
                <StyledField placeholder="Message" as="textarea" />
                <Button type="submit">Send message</Button>
            </StyledForm>
        </StyledContacts>
    );
};

const StyledContacts = styled.div`
    min-height: 100vh;
    background-color: #b2e3ae;
`

const StyledForm = styled.form`
    max-width: 459px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
`

const StyledField = styled.input`
    
`