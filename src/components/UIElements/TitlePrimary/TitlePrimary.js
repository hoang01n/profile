import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const Title = styled.h2`
    margin-bottom: 1rem;
    font-size: 2.25rem;
    color: var(--txt-title);
    font-weight: 700;

    @media ${device.laptop}{
        font-size: 3.5rem;
    }

`