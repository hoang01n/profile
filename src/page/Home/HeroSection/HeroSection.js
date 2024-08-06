import styled, {keyframes} from "styled-components";
import {device} from "../../../styles/breakpoints";
import logo from "~/assets/Images/avatarH.jpg";

const ware = keyframes`
0%{
 transform:rotate(0deg)
}
10%{
    transform:rotate(14deg)
}
20%{
    transform:rotate(-8deg)
}
30%{
    transform:rotate(14deg)
};
40%{
    transform:rotate(-4deg)
}
50%{
    transform:rotate(10deg)
}
60%{
    transform:rotate(0deg)
}

100%{
    transform:rotate(0deg)
}
`;

export const HeroContainer = styled.section`
  /* margin-top: 1.2rem;
  padding-top: 30px; */
  position: relative;
  background-color: var(--bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 7px 5%;
  z-index: -1;
  @media ${device.laptop} {
    padding-top: 20px;
  }
`;
export const HeroImage = styled.img.attrs({
  src: `${logo}`,
})`
  border: 0.2rem solid var(--txt-primary);
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin-top: 3rem;
  margin-bottom: 1rem;
  background: transparent;
  z-index: 9999;
`;
export const HeroTitle = styled.h1`
  color: var(--txt-title);
  font-size:36px;
  font-weight:900;
  font-family: Montserrat,sans-serif;
  line-height:48px;


  strong {
    font-family: 900;
    color: var(--txt-primary);
  }
  span {
    animation-name: ${ware};
    animation-duration: 1.6s;
    animation-fill-mode: forwards;
    animation-delay: 1s;
    animation-iteration-count: infinite;
    transform-origin: 70% 70%;
    display: inline-block;
    @media ${device.laptop} {
      font-size: 56px;
      line-height: 90px;
    }
  }
`;
export const HeroSubTitle = styled.h2`
  color: var(--txt-primary);
  font-size: 36px;
  font-weight:900;
  font-family:sans-serif;
`;
export const HeroWelcome = styled.span`
  font-size: 15px;
  color: var(--txt);
  text-transform: uppercase;
  letter-spacing: 4px;
`;
