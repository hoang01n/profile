import React from "react";
import MainLayout from "../../layouts/Mainlayout/Mainlayout";
// import InforSection from "../Home/InforSection";
import AboutTextCard from "./AboutTextCard";
import TeckSkills from "./TeckSkills";

const About = () => {
  return (
    <MainLayout>
      <AboutTextCard />
      <TeckSkills />
    </MainLayout>
  );
};

export default About;
