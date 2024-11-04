import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Quiz from "./pages/quiz/Quiz.jsx";
import Logo from "./pages/logo/logo.jsx";
import Biodiversity from "./pages/biodiversity/Biodiversity.jsx";
import Deforest from "./pages/deforest/Deforest.jsx";
import Erosion from "./pages/erosion/Erosion.jsx";
import Home from "./pages/home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Logo />,
  },
  {
    path: "/Quiz",
    element: <Quiz />,
  },
  {
    path: "/Biodiversity",
    element: <Biodiversity />,
  },
  {
    path: "/Deforest",
    element: <Deforest />,
  },
  {
    path: "/Erosion",
    element: <Erosion />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);