// .Headercontainer {
//     position: absolute;
//     top: 0;
//     z-index: 999;
//     width: 100%;
//     background: transparent;
//     transition: .3s;

//     &.headerHighlight {
//         position: fixed;
//         box-shadow: 0 0 10px rgb(0 0 0 / 10%);
//         background-color: var(#f8f9fc);
//     }

// }
import styled from "styled-components";
import {device} from "../../styles/breakpoints";
export const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  z-index: 999;
   width: 100%;
  background: transparent;
  transition: 0.3s;
 
  @media ${device.laptop} {
    padding: 0 15%;
  }

  &.headerHighlight {
    position: fixed;
    box-shadow: 0 0 10px rgb(0 0 0 / 10%);
    background-color: var(--bg-secondary);
  }
`;
