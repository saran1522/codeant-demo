import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RepoProvider } from "./Context/RepoContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RepoProvider>
      <App />
    </RepoProvider>
  </StrictMode>
);
