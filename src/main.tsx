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
import StepFour from "./components/Step4";
import Confirm from "./components/Confirm";

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
  {
    path: "/step-4",
    element: <StepFour />,
  },
  {
    path: "/confirm",
    element: <Confirm />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
);
