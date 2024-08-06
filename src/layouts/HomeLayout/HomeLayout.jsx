import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MainNavigation from "../../components/Navigation/MainNavigation";
import ParticlesComponent from "../../components/UIElements/Particles";

const HomeLayout = ({children}) => {
  return (
    <>
      <ParticlesComponent />
      <Header>
        <MainNavigation />
      </Header>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default HomeLayout;
