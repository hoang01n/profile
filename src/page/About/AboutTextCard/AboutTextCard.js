import styled from "styled-components";
import {device} from "../../../styles/breakpoints";
import Story from "../../../assets/Images/avatar.jpg";

export const AboutContainer = styled.section`
  padding: 76px 5%;
  background: var(--bg);
  @media ${device.lap} {
  }
`;

export const AboutStory = styled.div`
  @media ${device.laptop} {
    width: 55%;
    margin-right: 5%;
  }
`;
export const AboutContext = styled.p`
  font-size: 16px;
  color: var(--txt);
  span {
    color: var(--txt-primary);
  }
  strong {
    color: var(--txt-primary);
  }
`;
export const AboutInner = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  @media ${device.laptop} {
    flex-direction: row;
  }
`;
export const AboutStoryImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.laptop} {
    width: 40%;
  }
`;
export const AboutStoryImage = styled.img.attrs({
  src: `${Story}`,
})`
  max-width: 100%;
  height: 450px;
`;
export const AboutLocaltion = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid var(--txt);
  color: var(--txt);
  width: 70%;
  font-size: 16px;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
`;
export const AboutActivity = styled.ul`
  color: var(--txt);
  font-size: 16px;
`;
export const AboutStrive = styled.h4`
  color: var(--txt-primary);
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  @media ${device.laptop} {
    font-size: 20px;
  }
`;
