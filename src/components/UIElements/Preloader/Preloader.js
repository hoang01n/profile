import styled from "styled-components";
import Pre from "../../../assets/svg/pre.svg";

export const PreLoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999999;
  background-color: var(--preloader);
  /* background-image: url(${Pre}); */
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${Pre});
`;
