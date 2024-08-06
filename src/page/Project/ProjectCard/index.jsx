import React from "react";
import {Link, useLocation} from "react-router-dom";
import {
  ProjectCardBox,
  ProjectCardBoxThumbnail,
  ProjectCardItem,
  ProjectCardBoxDescription,
  ProjectCardBoxTitle,
  ProjectCardBoxContent,
} from "./ProjectCard";
import {LazyLoadImage} from "react-lazy-load-image-component";

const ProjectCard = ({id, image = "", title, deprecations}) => {
  const location = useLocation();
  return (
    <ProjectCardItem key={id}>
      <Link to={`/project/${id}`} state={{background: location}}>
        <ProjectCardBox>
          <ProjectCardBoxThumbnail>
            <LazyLoadImage
              alt="card-img"
              effect="blur"
              src={image.src}
              width="100%"
              height="15rem"
              placeholderSrc={image.placeholderSrc}
            />
          </ProjectCardBoxThumbnail>
          <ProjectCardBoxContent>
            <ProjectCardBoxTitle>{title}</ProjectCardBoxTitle>
            <ProjectCardBoxDescription>
              {deprecations}
            </ProjectCardBoxDescription>
          </ProjectCardBoxContent>
        </ProjectCardBox>
      </Link>
    </ProjectCardItem>
  );
};

export default ProjectCard;
