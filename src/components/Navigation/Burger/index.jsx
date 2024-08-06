import React from "react";
import {BurgerBtn} from "./Burger";
import {MdOutlineMenu} from "react-icons/md";

const Burger = ({onClick}) => {
  return (
    <BurgerBtn onClick={onClick}>
      <MdOutlineMenu size={24} />
    </BurgerBtn>
  );
};

export default Burger;
