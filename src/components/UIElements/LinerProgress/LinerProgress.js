import styled, { keyframes } from "styled-components";

const progressLinearMovement = keyframes`
    0% {
        left: -100%;
    }
    50% {
        left: 100%;
    }
    100% {
        left: 100%;
    }
`;

export const LinearProgressContainer = styled.div`
    background: transparent;
    height: 7px;
    position: relative;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;    
`

export const LinerProgressBar = styled.div`
    position: absolute;
    transition: transform 0.2s linear;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    background: var(--txt-primary);

    &.bar1{
        animation: ${progressLinearMovement} 2s infinite;
        animation-delay: 0s;
    }

    &.bar2{
        left: -100%;
        animation: ${progressLinearMovement} 2s infinite;
        animation-delay: 0.7s;
    }
`



