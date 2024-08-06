import React from "react";
import {
  ProjectSectionCardList,
  ProjectSectionContainer,
  ProjectSectionInner,
  ProjectSectionSubTitle,
} from "./ProjectSection";
import {Title} from "../../../components/UIElements/TitlePrimary/TitlePrimary";
import ProjectCard from "../ProjectCard";
import {PROJECTS} from "../../../Constants/projects";

const ProjectSection = () => {
  return (
    <ProjectSectionContainer>
      <ProjectSectionInner>
        <Title>My Project</Title>
        <ProjectSectionSubTitle>
          Here are a few projects I've worked on recenntly
        </ProjectSectionSubTitle>
        <ProjectSectionCardList>
          {PROJECTS.map((props) => (
            <ProjectCard key={props.id} {...props} />
          ))}
        </ProjectSectionCardList>
      </ProjectSectionInner>
    </ProjectSectionContainer>
  );
};

export default ProjectSection;
