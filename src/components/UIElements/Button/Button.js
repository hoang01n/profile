import styled from "styled-components";

export const ButtonAs = styled.button`
    background-color: ${props => props.primary ? "var(--btn-primary)" : "transparent"};
    color: ${props => props.primary ? "white" : "var(--btn-primary)"};
    padding: 0.375rem 0.75rem;
    display: flex;
    align-items: center;
    border: 2px solid ${props => props.primary ? "var(--btn-primary)" : "var(--btn-primary)"};
    border-radius: 4px;
    position: relative;
    letter-spacing: .2px;
    text-transform: uppercase;
    transition: all 0.5s ease 0s;
    cursor: ${props => props.disabled ? "no-drop" : "pointer"};

    svg {
        vertical-align: middle;
    }

    &:hover {
        color: ${props => props.primary ? "var(--btn-primary)" : "#fff"};
        background-color: ${props => props.primary ? "transparent" : "var(--btn-primary)"};
        border-color: ${props => props.primary ? "#fff" : "var(--btn-primary)"};
    }
`

export const  ButtonLink = styled.a`
    background-color: ${props => props.primary ? "var(--btn-primary)" : "transparent"};
    color: ${props => props.primary ? "white" : "var(--btn-primary)"};
    padding: 0.375rem 0.75rem;
    display: flex;
    align-items: center;
    border: 2px solid ${props => props.primary ? "var(--btn-primary)" : "var(--btn-primary)"};
    border-radius: 4px;
    position: relative;
    letter-spacing: .2px;
    text-transform: uppercase;
    transition: all 0.5s ease 0s;
    cursor: ${props => props.disabled ? "no-drop" : "pointer"};

    svg {
        vertical-align: middle;
    }

    &:hover {
        color: ${props => props.primary ? "var(--btn-primary)" : "#fff"};
        background-color: ${props => props.primary ? "transparent" : "var(--btn-primary)"};
        border-color: ${props => props.primary ? "var(--btn-primary)" : "#fff"};
    }
`