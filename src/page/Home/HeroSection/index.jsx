import React from "react";

import {
  HeroContainer,
  HeroImage,
  HeroSubTitle,
  HeroTitle,
  HeroWelcome,
} from "./HeroSection";
import AppTypewriter from "../../../components/UIElements/Typewriter";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroImage></HeroImage>
      <HeroWelcome>WelCome to my work</HeroWelcome>
      <HeroTitle>
        Hi, I'm <strong>Lê Hoàng.</strong> <span>👋</span>
      </HeroTitle>
      <HeroSubTitle>
        <AppTypewriter
          strings={"ReactJS Developer"}
          wrapperClassName="typewriterWrapper"
          cursorClassName="typewriterCursor"
        />
      </HeroSubTitle>
    </HeroContainer>
  );
};

export default HeroSection;
