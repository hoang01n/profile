import React from "react";

import HeroSection from "./HeroSection";
import HomeLayout from "../../layouts/HomeLayout/HomeLayout";
import InforSection from "./InforSection";
import TeckSkills from "../About/TeckSkills";

export default function Home() {
  return (
    <div>
      <HomeLayout>
        <HeroSection />
        <InforSection />
        <TeckSkills />
      </HomeLayout>
    </div>
  );
}
