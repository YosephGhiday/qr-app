import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ModalProvider } from "./context/ModalContext.tsx";
import RenderModal from "./components/RenderModal.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ModalProvider>
      <RenderModal />
      <App />
    </ModalProvider>
  </StrictMode>
);
