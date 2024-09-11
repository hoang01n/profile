import styled from "styled-components";
import {device} from "../../../styles/breakpoints";

export const ProjectCardModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.5;
  word-wrap: break-word;
  color: var(--txt);

`;

export const ProjectCardModalFooter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  justify-content: space-evenly;
`;

export const ProjectCardModalContent = styled.div`
  flex: 1 1 auto;
  padding: 1.25rem 1rem;
  max-width: 575px;
  width: 100%;
`;
export const ProjectCardModalTitle = styled.h3`
  font-size: 20px;
  color: var(--txt-title);
  font-weight: 600;
  margin-bottom: 1rem;

  @media ${device.desktop} {
    font-size: 24px;
  }
`;
export const ProjectCardModalTechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid transparent;

  li {
    border-radius: 0.5rem;
    padding: 5px 10px;
    background-color: var(--tags-bg);
    margin-right: 10px;
    margin-bottom: 10px;
    color: var(--tags-txt);
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    &:last-child {
      margin-right: 0px;
    }
  }
`;
export const ProjectCardModalThumbnail = styled.div`
  .project-img {
    display: block;
    max-width: 38rem;
    min-height: 20rem;
  }
`;
