import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";

// import { ThemeProvider } from "styled-components";
// import { theme } from "./theme";

import App from "./App";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme} > */}
      {/* <BrowserRouter basename={'pet-project-coaching'}> */}
        <App />
      {/* </BrowserRouter> */}
    {/* </ThemeProvider> */}
  </React.StrictMode>
);
