import styled from "styled-components";
import {device} from "../../../styles/breakpoints";

export const ResumeSectionContainer = styled.section`
  background-color: var(--bg);
  padding: 120px 5%;
  position: relative;

  @media ${device.laptop} {
    padding: 150px 90px;
  }
`;
export const ResumeSectionInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

export const ResumeSectionStory = styled.div`
  width: 60%;
  @media ${device.laptop} {
    width: 70%;
  }
`;
export const ResumeSvg = styled.div`
  position: relative;
  overflow: hidden;
  img {
    max-width: 100%;
    height: auto;
  }
  @media ${device.desktop.lap} {
    width: 30%;
  }
`;
export const ResumeWrap = styled.div`
  margin-top: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;
