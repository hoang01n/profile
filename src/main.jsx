import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.scss";

// import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "./hooks/themeHook/themeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <React.StrictMode>
      {/* <BrowserRouter> */}
        <App />
      {/* </BrowserRouter> */}
    </React.StrictMode>
  </ThemeProvider>
);
