import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {fontTheme} from "./utils/themes"


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={createTheme(fontTheme)}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
