import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import Register from "./components/Auth/Register.jsx";
// clear local storage
localStorage.clear();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <App />
      {/* <Register /> */}
    </AuthProvider>
  </StrictMode>,
);
