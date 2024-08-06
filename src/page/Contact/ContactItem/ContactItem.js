import styled from "styled-components";
import {device} from "../../../styles/breakpoints";

export const ContactItemBox = styled.div`
  position: relative;
  margin-top: 30px;
  box-shadow: 0 4px 5px 3px var(--bg-shadow);
  border-radius: 10px;
  background-color: transparent;
  padding: 54px 40px 50px;
  text-align: left;

  &:hover {
    .icon-address {
      background: var(--txt-primary);
      border-color: var(--txt-primary);
    }

    svg {
      fill: #fff;
    }
  }
`;
export const ContactItemIcon = styled.div`
  border: 2px solid var(--bg-shadow);
  width: 78px;
  height: 78px;
  color: #f9004d;
  line-height: 78px;
  text-align: center;
  border-radius: 100%;
  background: #fff;
  font-size: 28px;
  position: absolute;
  top: -40px;
  left: 30px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
`;
export const ContactItemInner = styled.div``;
export const ContactItemTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: var(--txt-title);
`;
export const ContactItemContent = styled.p`
  font-size: 16px;
  margin-bottom: 0;
  color: var(--txt);

  @media ${device.laptop} {
    font-size: 16px;
  }
`;
