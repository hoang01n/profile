import styled from "styled-components";
import {device} from "../../../styles/breakpoints";

export const SideDrawerContainer = styled.aside`
  height: 100vh;
  width: 85vw;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  display: block;
  overflow-y: auto;
  background-color: var(--bg);
  transition: all 0.8s cubic-bezier(0.77, 0.2, 0.05, 1);

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 55px;
    position: relative;

    li {
      display: block !important;
      width: 100%;
      margin: 0;

      a {
        /* color: #fff !important; */
      }
    }
  }

  @media ${device.mobileL} {
    width: 60vw;
  }

  @media ${device.laptop} {
    display: none;
    visibility: hidden;
    opacity: 0;
  }
`;
