import React, {useState} from "react";
import Logo from "../../Logo";

import {
  MainNavigationClose,
  MainNavigationContainer,
  MainNavigationNav,
} from "./ManiNavigation.js";
import {AiOutlineClose} from "react-icons/ai";
import NavLinks from "../NavLinks/index.jsx";
import BtnTheme from "../../BtnTheme";
import Burger from "../Burger";
import SideDrawer from "../SideDrawer/index.jsx";
const MainNavigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };
  return (
    <MainNavigationContainer>
      <Logo />
      <MainNavigationNav>
        <NavLinks />
      </MainNavigationNav>
      <BtnTheme />
      <Burger onClick={toggleDrawer} />
      <SideDrawer show={isDrawerOpen} onClose={toggleDrawer}>
        <MainNavigationClose onClick={toggleDrawer}>
          <AiOutlineClose size={28} />
        </MainNavigationClose>
        <NavLinks />
      </SideDrawer>
    </MainNavigationContainer>
  );
};

export default MainNavigation;
