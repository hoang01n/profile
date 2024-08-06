import React from "react";
import {Title} from "../../../components/UIElements/TitlePrimary/TitlePrimary";
import ResumeIcon from "../../../assets/svg/resume.svg";
import {
  ResumeSectionInner,
  ResumeSvg,
  ResumeSectionContainer,
  ResumeWrap,
  ResumeSectionStory,
} from "./ResumeSection";
import Button from "../../../components/UIElements/Button";
const ResumeSection = () => {
  return (
    <ResumeSectionContainer>
      <ResumeSectionInner>
        <ResumeSectionStory>
          <Title>My Resume</Title>
        </ResumeSectionStory>
        <ResumeSvg>
          <img src={ResumeIcon} alt="" />
        </ResumeSvg>
      </ResumeSectionInner>
      <ResumeWrap>
        <Button>Download resume.</Button>
      </ResumeWrap>
    </ResumeSectionContainer>
  );
};

export default ResumeSection;
