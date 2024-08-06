import React from "react";
import {NavLink} from "react-router-dom";
import {NavLinksItem, NavLinksList} from "./NavLink.js";

const NavLinks = () => {
  return (
    <NavLinksList>
      <NavLinksItem key="home">
        <NavLink className={({isActive}) => (isActive ? "active" : "")} to="/">
          Home
        </NavLink>
      </NavLinksItem>
      <NavLinksItem key="About">
        <NavLink
          className={({isActive}) => (isActive ? "active" : "")}
          to="/About"
        >
          About
        </NavLink>
      </NavLinksItem>
      <NavLinksItem key="project">
        <NavLink
          className={({isActive}) => (isActive ? "active" : "")}
          to="/projects"
        >
          Project
        </NavLink>
      </NavLinksItem>
      <NavLinksItem key="resume">
        <NavLink
          className={({isActive}) => (isActive ? "active" : "")}
          to="/resume"
        >
          Resume
        </NavLink>
      </NavLinksItem>
      <NavLinksItem key="contact">
        <NavLink
          className={({isActive}) => (isActive ? "active" : "")}
          to="/contact"
        >
          Contact
        </NavLink>
      </NavLinksItem>
    </NavLinksList>
  );
};

export default NavLinks;
