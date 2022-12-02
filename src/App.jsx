import { Suspense } from "react";
import DefRoutes from "./utils/routes";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Loading from "./layouts/Loading";
import "./App.css";
import "./login.css";
import "./dashboard.css";

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
