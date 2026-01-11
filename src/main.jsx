import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Offerings from "./pages/Offerings";
import SkincareIntelligence from "./pages/SkincareIntelligence";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import "./styles/globals.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "offerings", element: <Offerings /> },
      { path: "skincare-intelligence", element: <SkincareIntelligence /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
