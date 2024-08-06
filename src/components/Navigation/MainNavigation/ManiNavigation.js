import styled from "styled-components";
import {device} from "../../../styles/breakpoints";

export const MainNavigationContainer = styled.div`
  min-height: 56px;
  display: flex;
  align-items: center;
  padding: 0px 5%;
  justify-content: space-between;

  ${device.laptop} {
    max-width: 1200px;
    margin: auto;
    padding: 0px 20%;
  }
  ${device.desktopL} {
    padding: 0 10%;
  }
`;
export const MainNavigationNav = styled.nav`
  display: none;
  visibility: hidden;
  opacity: 2;
  @media ${device.laptop} {
    display: flex;
    margin-left: auto;
    visibility: visible;
    opacity: 1;
  }
`;
export const MainNavigationClose = styled.button`
  position: fixed;
  top: 12px;
  right: 30px;
  display: block;
  z-index: 1000;
  background: transparent;
  color: var(--txt);
  border: none;
  cursor: pointer;
`;
