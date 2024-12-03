import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Biodiversity from "./pages/biodiversity/Biodiversity.jsx";
import Deforest from "./pages/deforest/Deforest.jsx";
import Erosion from "./pages/erosion/Erosion.jsx";
import Home from "./pages/home/Home.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import Erosion_model_3D from "./pages/erosion/erosion_model_3D/Erosion_model_3D.jsx"
import QuizErosion from "./pages/erosion/quiz_erosion/QuizErosion.jsx"
import SensibilizacionErosion from "./pages/erosion/quiz_erosion/SensibilizacionErosion.jsx"
import Quiz from "./pages/quiz/Quiz.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/login/Login.jsx";

function main(){
  <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/home" element={<Home />} />
        <Route path="/biodiversity" element={<Biodiversity />} />
        <Route path="/deforest" element={<Deforest />} />
        <Route path="/erosion" element={<Erosion />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Home",
    element: <Home />,
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
  {
    path: "/Erosion_model_3D",
    element: <Erosion_model_3D />,
  },
  {
    path: "/QuizErosion",
    element: <QuizErosion />,
  },
  {
    path: "/SensibilizacionErosion",
    element: <SensibilizacionErosion />,
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