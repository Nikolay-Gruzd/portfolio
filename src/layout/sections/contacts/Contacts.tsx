import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <StyledForm>
                    <Label htmlFor="name">Name</Label>
                    <Field placeholder="name" id="name" />

                    <Label htmlFor="email">Email</Label>
                    <Field placeholder="email" id="email"/>

                    <Label htmlFor="textarea">Message</Label>
                    <Field placeholder="message" as="textarea" id="textarea"/>

                    <Button type="submit" width={"100%"}>Submit</Button>
                </StyledForm>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
`

const StyledForm = styled.form`
    max-width: 532px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin: 0 auto;
    
    Label{
        margin-bottom: -19px;
    }
    
    textarea{
        resize: none;
        height: 165px;
    }
`

const Label = styled.label`
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0;
`

const Field = styled.input`
    width: 100%;
    padding: 15px 18px;
    box-sizing: border-box;
    border: 1px solid ${theme.colors.darkAccent};
    border-radius: 6px;

    color: ${theme.colors.font};
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0;
    
    &::placeholder {
        color: ${theme.colors.placeholderColor};
        text-transform: capitalize;
    }
    
    &:focus-visible{
        outline: 1px solid ${theme.colors.accent};
    }
`