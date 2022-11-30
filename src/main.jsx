import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { fontTheme } from "./utils/themes";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={createTheme(fontTheme)}>
        <App />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
