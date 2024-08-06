import React from "react";
import {CSSTransition} from "react-transition-group";
import Backdrop from "../../UIElements/Backdrop";
import {SideDrawerContainer} from "./SideDrawer";

const SideDrawer = ({children, show, onClose}) => {
  return (
    <>
      {show && <Backdrop onClick={onClose} />}
      <CSSTransition
        in={show}
        timeout={300}
        classNames="slider-in__right"
        mountOnEnter
        unmountOnExit
      >
        <SideDrawerContainer>{children}</SideDrawerContainer>
      </CSSTransition>
    </>
  );
};

export default SideDrawer;
