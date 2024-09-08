import React from "react";

import {

  HeroContainer,
  InfoThumbnail,
  HeroSubTitle,
  HeroTitle,
  HeroWelcome,
} from "./HeroSection";
import {LazyLoadImage} from "react-lazy-load-image-component";
import AppTypewriter from "../../../components/UIElements/Typewriter";
import avatar from "../../../assets/svg/profile.svg";

const HeroSection = () => {
  return (
    <HeroContainer>
      {/* <HeroImage></HeroImage> */}
      <InfoThumbnail>
          <LazyLoadImage
            width="100%"
            height="30%"
            alt="avatar"
            effect="blur"
            src={avatar}
          />
        </InfoThumbnail>
      <HeroWelcome>WelCome to my work</HeroWelcome>
      <HeroTitle>
        Hi, I'm <strong>Lê Hoàng.</strong> <span>👋</span>
      </HeroTitle>
      <HeroSubTitle>
        <AppTypewriter
          strings={"ReactJS Developer."}
          wrapperClassName="typewriterWrapper"
          cursorClassName="typewriterCursor"
        />
      </HeroSubTitle>
    </HeroContainer>
  );
};

export default HeroSection;
