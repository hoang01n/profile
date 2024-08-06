import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MainNavigation from "../../components/Navigation/MainNavigation";
import ParticlesComponent from "../../components/UIElements/Particles";
// import style from "./style.module.scss";

const MainLayout = ({children}) => {
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

export default MainLayout;
