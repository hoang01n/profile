
import BaseRoutes from "./routers";
import { GlobalStyle } from "./styles/global";
import PreLoader from "./components/UIElements/Preloader";
import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Suspense fallback={<PreLoader />}>
        <Router>
          <BaseRoutes />
        </Router>
      </Suspense>
    </>
  );
}

export default App;
