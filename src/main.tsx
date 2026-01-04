import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import App from "./App.tsx";
import ProjectDetail from "./components/ProjectDetail.tsx";
import Resume from "./components/Resume.tsx";
import NotFound from "./components/NotFound.tsx";
import ErrorPage from "./components/ErrorPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
