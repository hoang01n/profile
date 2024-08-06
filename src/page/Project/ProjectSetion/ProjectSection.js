import styled from "styled-components";
import {device} from "../../../styles/breakpoints";

export const ProjectSectionContainer = styled.div`
  padding: 70px 5%;
  background-color: var(--bg);
  @media ${device.laptop} {
    padding: 150px 90px;
  }
`;
export const ProjectSectionInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;
export const ProjectSectionCardList = styled.ul`
  display: flex;
`;
export const ProjectSectionSubTitle = styled.h4`
  font-size: 1.5rem;
  color: var(--txt);
`;
