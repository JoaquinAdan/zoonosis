import "./App.css";
import "./login.css";
import { Suspense } from "react";
import DefRoutes from "./utils/routes";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import paw from "./assets/paw.svg"
import Loading from "./layouts/Loading";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Suspense fallback={<Loading />}>
        <DefRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;