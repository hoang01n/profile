// import "./App.scss";

import BaseRoutes from "./routers";
import {GlobalStyle} from "./styles/global";
import PreLoader from "./components/UIElements/Preloader";
import {Suspense} from "react";
import {BrowserRouter} from "react-router-dom";

// import Home from "./page/Home";

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Suspense fallback={<PreLoader />}>
        <BrowserRouter>
          <BaseRoutes />
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
