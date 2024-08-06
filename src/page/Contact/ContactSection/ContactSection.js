import styled from "styled-components";
import {device} from "../../../styles/breakpoints";
export const ContactContainer = styled.section`
  position: relative;
  padding: 70px 5%;
  background-color: var(--bg);

  @media ${device.laptop} {
    padding: 150px 90px;
  }
`;
export const ContactInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

export const ContactSubTitle = styled.h4`
  font-size: 16px;
  color: var(--txt);
  padding: 0;

  @media ${device.laptop} {
    font-size: 18px;
    padding: 0 20%;
  }
`;
export const ContactWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 20px;
  margin-top: 50px;
  @media ${device.laptop} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;
