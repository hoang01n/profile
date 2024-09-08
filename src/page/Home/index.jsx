import React from "react";

import HeroSection from "./HeroSection";
import HomeLayout from "../../layouts/HomeLayout/HomeLayout";
// import InforSection from "./InforSection";
import TeckSkills from "../About/TeckSkills";
import AboutTextCard from "./AboutMe";

export default function Home() {
  return (
    <div>
      <HomeLayout>
        <HeroSection />
        {/* <InforSection /> */}
        <AboutTextCard/>
        <TeckSkills />
      </HomeLayout>
    </div>
  );
}
