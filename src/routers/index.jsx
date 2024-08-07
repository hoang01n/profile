import {lazy} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
//modal
import ProjectCardModal from "../page/Project/ProjectCardModal";

//page
const Home = lazy(() => import("../page/Home"));
const Resume = lazy(() => import("../page/Resume"));
const About = lazy(() => import("../page/About"));
const Contact = lazy(() => import("../page/Contact"));
const Project = lazy(() => import("../page/Project"));
// const ProjectCardModal = lazy(() => import("../page/Project/ProjectCardModal"));

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
        {/* <Route path="/project/:id" element={<ProjectCardModal />} /> */}
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {
        background && (
          <Routes>
            <Route path="/project/:id" element={<ProjectCardModal />} />
          </Routes>
        )
        //  <Route path="/project/:id" component={ProjectCardModal} />
      }
    </>
  );
};

export default BaseRoutes;
