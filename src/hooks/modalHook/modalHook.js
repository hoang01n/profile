import { useCallback } from "react";
import {useState} from "react";

export const useModal = (initialVisible = false) => {
  const [isVisible, updateVisible] = useState(initialVisible);

  const toggleModal = useCallback(() => {
    updateVisible((prev) => !prev);
  }, []);
  return {isVisible, toggleModal};
};
