import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Quiz from "./pages/quiz/Quiz.jsx";
import Logo from "./pages/logo/logo.jsx";
import Biodiversity from "./pages/biodiversity/Biodiversity.jsx";
import Deforest from "./pages/deforest/Deforest.jsx";
import Erosion from "./pages/erosion/Erosion.jsx";
import Home from "./pages/home/Home.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function main(){
  <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/home" element={<Home />} />
        <Route path="/biodiversity" element={<Biodiversity />} />
        <Route path="/deforest" element={<Deforest />} />
        <Route path="/erosion" element={<Erosion />} />
      </Routes>
    </Router>
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Logo />,
  },
  {
    path: "/Home",
    element: <Home />,
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