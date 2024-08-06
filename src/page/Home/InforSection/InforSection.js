import styled from "styled-components";

import {device} from "../../../styles/breakpoints";

export const InfoContainer = styled.section`
  padding: 70px 5%;
  background-color: var(--bg-secondary);

  @media ${device.laptop} {
    padding: 150px 90px;
  }
`;

export const InfoInner = styled.div`
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

export const InfoDescription = styled.div`
  width: 100%;
  padding-top: 30px;

  @media ${device.laptop} {
    width: 75%;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 0px;
  }
`;

export const InfoTab = styled.div``;
export const InfoTabTitle = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      font-size: 20px;
      padding: 10px 60px;
      cursor: pointer;
      opacity: 0.6;
      background: white;
      border: 0;
      outline: 0;
      ${({active}) =>
        active &&
        `
                border-bottom: 2px solid black;
                opacity: 1;
            `}
    }
  }
`;
export const InfoTabContent = styled.div`
  p {
    color: #fff;
  }
`;
export const InfoThumbnail = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex: 0 1 auto;
  align-items: center;
  justify-content: center;
  padding: 0 35px;

  @media ${device.laptop} {
    width: 35%;
  }
`;

export const InfoText = styled.p`
  color: var(--txt);
  font-size: 16px;
  line-height: 28px;

  @media ${device.laptop} {
    font-size: 18px;
  }
`;
