import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import PreLoader from "../components/UIElements/Preloader";
//modal
// import ProjectCardModal from "../page/Project/ProjectCardModal";
import ProjectCardModal from "../page/Project/ProjectCardModal";
//page
const Home = lazy(() => import("../page/Home"));
// const ProjectCardModal = lazy( ()=>import("../page/Project/ProjectCardModal"));
const Resume = lazy(() => import("../page/Resume"));
const About = lazy(() => import("../page/About"));
const Contact = lazy(() => import("../page/Contact"));
const Project = lazy(() => import("../page/Project"));


const BaseRoutes = () => {
  const location = useLocation();
  const background = location.state?.background;


  return (
    <>

      <Routes location={background || location}>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {background && (   
        <Routes>
          <Route path="/project/:id" element={
            <Suspense fallback={<PreLoader/>}>
            <ProjectCardModal />      
            </Suspense>
            }
             />
        </Routes>
          
      )}
    </>


  );
};

export default BaseRoutes;
