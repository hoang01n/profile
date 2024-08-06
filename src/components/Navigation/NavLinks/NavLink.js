import styled from "styled-components";
import {device} from "../../../styles/breakpoints";

export const NavLinksList = styled.ul`
  display: flex;
`;
export const NavLinksItem = styled.li`
  position: relative;
  overflow: hidden;
  color: var(--txt);
  margin: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  /* justify-content: space-between; */
  /* color: var(--txt); */
  /* color: #fff; */

  font-size: 20px;

  a {
    text-decoration: none;
    cursor: pointer;
    font-size: 1rem;
    display: flex;
    align-items: center;
    color: var(--txt-title);
    position: relative;
    height: 56px;
    font-weight: 700;
    transition: 0.3s ease-in;
    &:before {
      content: "";
      width: 100%;
      height: 2px;

      bottom: 0;
      left: 0;
      position: absolute;
      transform: translateX(-50px);
    }
    &:hover {
      color: var(--txt-primary);
      &:before {
        opacity: 1;
        transform: translateX(0px);
      }
    }

    &.active:before {
      background-color: var(--txt-primary);
      opacity: 1;
      transform: translateX(0px);
    }

    &.active {
      color: var(--txt-primary);
    }
  }
`;
