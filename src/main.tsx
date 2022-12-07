import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import StepOne from "./components/Step1";
import StepTwo from "./components/Step2";
import StepThree from "./components/Step3";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/step-1",
    element: <StepOne />,
  },
  {
    path: "/step-2",
    element: <StepTwo />,
  },
  {
    path: "/step-3",
    element: <StepThree />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
);
