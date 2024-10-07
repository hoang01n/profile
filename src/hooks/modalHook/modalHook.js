
import {useState} from "react";

 const useModal = () => {
  const [isVisible, updateVisible] = useState(false);
  // const [modalId, setModalId] = useState(null); 
  const toggleModal = (id) => {
    // setModalId();
    updateVisible(id !== null);
    // console.log(`Modal visibility changed to: ${!isVisible}`)
  };
  return {isVisible, toggleModal};
};
export default useModal;
