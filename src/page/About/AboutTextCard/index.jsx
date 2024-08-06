import React from "react";
import {
  AboutContainer,
  AboutContext,
  AboutInner,
  AboutStory,
  AboutActivity,
  AboutStoryImageContainer,
  AboutStoryImage,
  AboutLocaltion,
  AboutStrive,
} from "./AboutTextCard";
import {CiLocationOn} from "react-icons/ci";
import {Title} from "../../../components/UIElements/TitlePrimary/TitlePrimary";
const AboutTextCard = () => {
  return (
    <AboutContainer>
      <AboutInner>
        <AboutStory>
          <Title>Who am I?</Title>
          <AboutContext>
            Hi Everyone, I am <strong>Ngoc Hoang </strong> <span>😄</span>.{" "}
            <br />
            I'm a SoftWare engineer focusing on Front-End Web.
            <br />
          </AboutContext>
          <AboutContext>
            You can find me working with <span>ES6</span> ,
            <span>JavaScript</span> , <span> React. </span>
          </AboutContext>
          <AboutContext>
            Apart from coding, some other activites that i love to do!
          </AboutContext>

          <AboutActivity>
            <li>
              {" "}
              <span>⚡</span> Play game
            </li>
            <li>
              {" "}
              <span>⚡</span> Reading
            </li>
            <li>
              {" "}
              <span>⚡</span> Traveling
            </li>
          </AboutActivity>
          <AboutLocaltion>
            <CiLocationOn size={15} />
            Vietnamese
          </AboutLocaltion>
          <AboutStrive>
            "Strive to build things that make a difference!"
          </AboutStrive>
        </AboutStory>
        <AboutStoryImageContainer>
          <AboutStoryImage />
        </AboutStoryImageContainer>
      </AboutInner>
    </AboutContainer>
  );
};

export default AboutTextCard;
