import { useState } from "react";
import ButtonLinks from "./components/ButtonLinks";
import StepOne from "./components/Step1";

function App() {
  return (
    <div className="h-full">
      <div className="pt-5 relative h-full grid place-content-center">
        <ButtonLinks nextStep="Start Step" tujuan={"/step-1"} />
      </div>
    </div>
  );
}

export default App;
