import styled from "styled-components";
import {device} from "../../styles/breakpoints";

// Toggle.styled.js
export const BtnThemeContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  background-color: transparent;
  border-radius: 10px;
  color: var(--txt-primary);
  
  margin-left: auto;
  cursor: pointer;

  @media ${device.laptop} {
    margin-left: 0.5em;
  }
`;
