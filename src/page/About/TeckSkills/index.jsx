import React from "react";
import {
  SkillContainer,
  SkillInner,
  SkillList,
  SkillSubTitle,
} from "./TeckSkills";
import {Title} from "../../../components/UIElements/TitlePrimary/TitlePrimary";
import {AiTwotoneHtml5} from "react-icons/ai";
import {FaSass, FaReact, FaCss3Alt, FaGitAlt} from "react-icons/fa";
import {TbBrandJavascript} from "react-icons/tb";
import {SiRedux, SiTailwindcss, SiMui, SiTypescript} from "react-icons/si";

const TeckSkills = () => {
  return (
    <SkillContainer>
      <SkillInner>
        <Title>Professional Skills</Title>
        <SkillSubTitle>
          I've spent my time seeking and learning new technologies and forms of
          digital expression. <br /> This has led to me working on some{" "}
          <span>projects</span>, and worked with some great people.
        </SkillSubTitle>
        <SkillList>
          <li>
            <AiTwotoneHtml5 size={64} />
          </li>
          <li>
            <FaSass size={64} />
          </li>
          <li>
            <FaCss3Alt size={64} />
          </li>
          <li>
            <TbBrandJavascript size={64} />{" "}
          </li>
          <li>
            <FaReact size={64} />
          </li>
          <li>
            <SiRedux size={64} />
          </li>
          <li>
            <FaGitAlt size={64} />
          </li>
          <li>
            <SiTailwindcss size={64} />
          </li>
          <li>
            <SiMui size={64} />
          </li>
          <li>
            <SiTypescript size={64} />
          </li>
        </SkillList>
      </SkillInner>
    </SkillContainer>
  );
};

export default TeckSkills;
