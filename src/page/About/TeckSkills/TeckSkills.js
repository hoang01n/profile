import styled from "styled-components";
import {device} from "../../../styles/breakpoints";

export const SkillContainer = styled.section`
  position: relative;
  padding: 70px 5%;
  background-color: var(--bg-secondary);
  @media ${device.desktop} {
    padding: 150px 90px;
  }
`;
export const SkillInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;
export const SkillSubTitle = styled.h3`
  padding: 0 20%;
  color: var(--txt);
  font-size: 16px;
  display: inline-block;
  @media ${device.laptop} {
    font-size: 18px;
  }
`;
export const SkillList = styled.ul`
  display: grid;
  column-gap: 1rem;
  row-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 1rem;

  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${device.laptopL} {
    grid-template-columns: repeat(5, 1fr);
    li {
      padding: 2rem 4rem;
    }
  }
  li {
    border: 2px solid var(--bg-border);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 1rem 2rem;
    overflow: hidden;
    transition: all 0.5s ease 0s;

    box-shadow: 2px 3px 2px 1px var(--bg-shadow);
    &:hover {
      transform: scale(1.05);
      /* background: linear-gradient(90deg, #fff, #562654); */
      background-image: linear-gradient(90deg, #f61b10, #ef0963);
      border-color: var(--txt-primary);
    }
  }
  svg {
    fill: var(--social-icon);
  }
`;
