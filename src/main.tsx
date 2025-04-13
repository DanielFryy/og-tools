import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App/App";
import ThemeProvider from "@/providers/ThemeProvider/ThemeProvider";

import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem storageKey="theme">
      <App />
    </ThemeProvider>
  </StrictMode>
);
