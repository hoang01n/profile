// import React, { useEffect, useRef } from "react";
// import { CSSTransition } from "react-transition-group";
// import {MdOutlineClose} from "react-icons/md";
// import { ModalClose, ModalContainer, ModalWrap, ModalBox } from "./Modal";
// import Backdrop from "../UIElements/Backdrop";
// import {useNavigate} from "react-router-dom";

// const Modal = ({ children, show, onClose }) => {
//   console.log("Modal show value:", show);
//   const nodeRef = useRef(null);
//   const navigate = useNavigate();
//   const closeModal = (e) => {
//     console.log("closeModal called");
//     if (e.target === e.currentTarget) {
//       e.stopPropagation();
//       onClose();
//       navigate(-1)

//     }
//   };

//   useEffect(() => {
//     document.body.classList.add("overflow-hidden");
//     return () => {
//       document.body.classList.remove("overflow-hidden");
//     };
//   }, []);

//   return (
//     <ModalContainer>
//       {show && <Backdrop onClick={closeModal} />}
//       <CSSTransition
//         in={show}
//         timeout={300}
//         classNames="modal"
//         mountOnEnter
//         unmountOnExit
//         nodeRef={nodeRef}
//       >
//         <ModalBox ref={nodeRef}>
//           <ModalWrap onClick={closeModal}>
//             <ModalClose>
//               <MdOutlineClose size={22} />
//             </ModalClose>
//           </ModalWrap>
//           {children}
//         </ModalBox>
//       </CSSTransition>
//     </ModalContainer>
//   );
// };

// export default Modal;

// import React, {useEffect, useRef} from "react";
// // import {useNavigate} from "react-router-dom";
// import {CSSTransition} from "react-transition-group";
// import {MdOutlineClose} from "react-icons/md";
// import {ModalClose, ModalContainer, ModalWrap, ModalBox} from "./Modal";
// import Backdrop from "../UIElements/Backdrop";

// const Modal = ({children, show, onClose}) => {

//   const nodeRef = useRef(null);

 
//   const closeModal = (e) => {
//     if (e.target === e.currentTarget) {
//       e.stopPropagation();
//       onClose();
//     }
//     // navigate(-1);
//   };

//   useEffect(() => {
//     document.body.classList.add("overflow-hidden");
//     return () => {
//       document.body.classList.remove("overflow-hidden");
//     };
//   }, []);

//   return (
//     <ModalContainer>
//       {show && <Backdrop onClick={closeModal} />}
//       <CSSTransition
//         in={show}
//         timeout={300}
//         classNames="modal"
//         mountOnEnter
//         unmountOnExit
//         nodeRef={nodeRef}
//       >
//         <ModalBox ref={nodeRef}>
//           <ModalWrap
//             onClick={closeModal}
//           >
//             <ModalClose>
//               <MdOutlineClose size={22} />
//             </ModalClose>
//           </ModalWrap>
//           {children}
//         </ModalBox>
//       </CSSTransition>
//     </ModalContainer>
//   );
// };

// export default Modal;

// import React, {useEffect, useRef} from "react";
// import {useNavigate} from "react-router-dom";
// import {CSSTransition} from "react-transition-group";
// import {MdOutlineClose} from "react-icons/md";
// import {ModalClose, ModalContainer, ModalWrap, ModalBox} from "./Modal";
// import Backdrop from "../UIElements/Backdrop";

// const Modal = ({children, show, onClose}) => {
//   const navigate = useNavigate();
//   const nodeRef = useRef(null);
//   const closeModal = (e) => {
//     onClose();

//     e.stopPropagation();
//     navigate(-1);
//   };

//   useEffect(() => {
//     document.body.classList.add("overflow-hidden");
//     return () => {
//       document.body.classList.remove("overflow-hidden");
//     };
//   }, []);

//   return (
//     <ModalContainer>
//       {show && <Backdrop onClick={closeModal} />}
//       <CSSTransition
//         in={show}
//         timeout={300}
//         classNames="modal"
//         mountOnEnter
//         unmountOnExit
//         ref={nodeRef}
//       >
//         <ModalBox ref={nodeRef}>
//           <ModalWrap onClick={closeModal}>
//             <ModalClose>
//               <MdOutlineClose size={22} />
//             </ModalClose>
//           </ModalWrap>
//           {children}
//         </ModalBox>
//       </CSSTransition>
//     </ModalContainer>
//   );
// };

// export default Modal;

// import React from 'react'

// const Modal = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default Modal
import React, {useEffect, useRef} from "react";
import {useNavigate} from "react-router-dom";
import {CSSTransition} from "react-transition-group";
import {MdOutlineClose} from "react-icons/md";
import {ModalClose, ModalContainer, ModalWrap, ModalBox} from "./Modal";
import Backdrop from "../UIElements/Backdrop";

const Modal = ({children, show, onClose}) => {
  const navigate = useNavigate();
  const nodeRef = useRef(null);
  const closeModal = (e) => {
    onClose();
    // e.stopPropagation();
    // Navigate.goBack();
    e.stopPropagation();
    navigate(-1);
  };

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return (
    <ModalContainer>
      {show && <Backdrop onClick={closeModal} />}
      <CSSTransition
        in={show}
        timeout={300}
        classNames="modal"
        mountOnEnter
        unmountOnExit
        nodeRef={nodeRef}
      >
        <ModalBox ref={nodeRef}>
          <ModalWrap onClick={closeModal}>
            <ModalClose>
              <MdOutlineClose size={22} />
            </ModalClose>
          </ModalWrap>
          {children}
        </ModalBox>
      </CSSTransition>
    </ModalContainer>
  );
};

export default Modal;
