import React, {useEffect} from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {useLocation, useParams} from "react-router-dom";
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
  // const location = useLocation();
  // const background = location.state && location.state.background;
  // const modalId = location.state && location.state.modalId;

  // const project = PROJECTS.find((p) => id === p.id);
  // const { isVisible, toggleModal } = useModal(!!background);

  // useEffect(() => {
  //   if (background && modalId === id) {
  //     toggleModal();
  //   }
  // }, [background, modalId, id, toggleModal]);
  // if (!project) return null;

  // const { image, title, links, technologies } = project;
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
