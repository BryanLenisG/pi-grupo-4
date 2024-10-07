import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Quiz from "./pages/quiz/Quiz.jsx";
import Logo from "./pages/logo/logo.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Logo />,
  },
  {
    path: "/Quiz",
    element: <Quiz />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);