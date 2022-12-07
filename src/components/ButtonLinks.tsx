import React from "react";
import { Link } from "react-router-dom";

interface PageProps {
  tujuan: any;
  nextStep?: string;
}

export default function ButtonLinks({
  tujuan,
  nextStep = "Next Step",
}: PageProps) {
  return (
    <Link
      to={tujuan}
      className="py-2.5 px-5 rounded-lg bg-marine hover:bg-opacity-80 text-white transition-all capitalize"
    >
      {nextStep}
    </Link>
  );
}
