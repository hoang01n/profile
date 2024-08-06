import React, {useEffect} from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {useParams} from "react-router-dom";
import Modal from "../../../components/Modal";
import Button from "../../../components/UIElements/Button";
import {PROJECTS} from "../../../Constants/projects";
import {useModal} from "../../../hooks/modalHook/modalHook";
import {
  ProjectCardModalFooter,
  ProjectCardModalContainer,
  ProjectCardModalContent,
  ProjectCardModalTechList,
  ProjectCardModalThumbnail,
  ProjectCardModalTitle,
} from "./ProjectCardModal";

const ProjectCardModal = () => {
  const {id} = useParams();
  const {image, title, links, technologies} = PROJECTS.find((p) => id === p.id);
  const {isVisible, toggleModal} = useModal(true);

  useEffect(() => {
    toggleModal();
  }, []);

  return (
    <Modal show={isVisible} onClose={toggleModal}>
      <ProjectCardModalContainer>
        <ProjectCardModalThumbnail>
          <LazyLoadImage
            alt="project-img"
            src={image.src}
            effect="blur"
            width="100%"
            wrapperClassName="project-img"
            placeholderSrc={image.placeholderSrc}
          />
        </ProjectCardModalThumbnail>
        <ProjectCardModalContent>
          <ProjectCardModalTitle>{title}</ProjectCardModalTitle>
          <ProjectCardModalTechList>
            {technologies.map((tech, id) => (
              <li key={id}>{tech}</li>
            ))}
          </ProjectCardModalTechList>
          <ProjectCardModalFooter>
            <Button href={links.site}>View project</Button>
            <Button $primary href={links.repo}>
              source code
            </Button>
          </ProjectCardModalFooter>
        </ProjectCardModalContent>
      </ProjectCardModalContainer>
    </Modal>
  );
};

export default ProjectCardModal;
