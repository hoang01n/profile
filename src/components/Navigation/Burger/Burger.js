import styled from "styled-components";
import { device } from '../../../styles/breakpoints';

export const BurgerBtn = styled.button`
    border: none;
    background: transparent;
    color: var(--txt-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 15px;
    padding: 0;
    cursor: pointer;

    @media ${device.laptop}{
        display: none;
    }
`